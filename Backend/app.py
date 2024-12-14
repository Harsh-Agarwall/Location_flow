from flask import Flask, jsonify
from flask_cors import CORS
import psutil
import platform
import datetime
import requests
import GPUtil  # Import GPUtil for GPU information

app = Flask(__name__)
CORS(app)  

@app.route('/system_info', methods=['GET'])
def system_info():
    # Collect GPU information using GPUtil
    try:
        gpus = GPUtil.getGPUs()
        if gpus:
            gpu_data = gpus[0].load * 100
                
            
        else:
            gpu_data = "No GPU detected"
    except Exception as e:
        gpu_data = {'error': str(e)}

    # Collect system data
    system_data = {
        'cpu_usage': psutil.cpu_percent(interval=1),
        'ram_usage': psutil.virtual_memory().percent,
        'battery_status': psutil.sensors_battery().percent if psutil.sensors_battery() else 'No battery',
        # 'cpu_temperature': psutil.sensors_temperatures().get('coretemp', [{}])[0].get('current', 'N/A'),
        'python_version': platform.python_version(),
        'location': requests.get('https://ipinfo.io').json().get('city', 'Unknown'),
        'current_time': datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
        'gpu_info': gpu_data  # Add GPU information to the response
    }
    return jsonify(system_data)

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)
