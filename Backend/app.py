from flask import Flask, jsonify
import psutil
import platform
import requests

app = Flask(__name__)

@app.route('/system_info', methods=['GET'])
def system_info():
    # Collect system data
    system_data = {
        'cpu_usage': psutil.cpu_percent(interval=1),
        'ram_usage': psutil.virtual_memory().percent,
        'battery_status': psutil.sensors_battery().percent,
        'cpu_temperature': psutil.sensors_temperatures().get('coretemp', [{}])[0].get('current', 'N/A'),
        'python_version': platform.python_version(),
        'location': requests.get('https://ipinfo.io').json().get('city', 'Unknown'),
        'time': datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    }
    return jsonify(system_data)

if __name__ == '__main__':
    app.run(debug=True)
