# System Resource Dashboard

A React.js-based System Resource Dashboard that dynamically displays real-time system metrics such as CPU usage, RAM usage, battery status, Python version, GPU usage, and approximate location based on IP. The backend is powered by Python (Flask).

-Live Link: https://systemifodashboard.netlify.app/ (backend will take some time to load)

## Features

- **Real-Time Metrics:** System metrics update every 5 seconds.
- **GPU Monitoring:** Displays GPU usage using `GPUtil`.
- **Frontend:** Built with React.js for a responsive and dynamic interface.
- **Backend:** Flask API for handling system data.
- **Location:** Fetches approximate location using `ipinfo.io`.
- **Modular Design:** Easy to extend and containerize.

---

## Folder Structure

```plaintext
SystemResources_dashboard/
|-- backend/                # Flask backend to provide system info API
|   |-- app.py             # Main Flask application
|   |-- requirements.txt   # Python dependencies
|
|-- frontend/               # React frontend
|   |-- public/            # Public assets
|   |-- src/               # Source code
|       |-- components/    # React components
|           |-- Dashboard.jsx   # Main dashboard component
|       |-- App.js         # Entry point for React app
|       |-- index.js       # React DOM rendering
|
|-- .gitignore              # Ignored files for Git
|-- README.md               # Project documentation
```

---

## Prerequisites

- Node.js and npm
- Python 3.10+
- A modern web browser

---

## Setup Instructions

### **Backend Setup**

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask server:
   ```bash
   python app.py
   ```

   The backend will run at `http://127.0.0.1:5000`.

### **Frontend Setup**

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

   The frontend will run at `http://127.0.0.1:5173`.

---

## API Endpoints

### **GET /system_info**
Returns system information in JSON format.

#### Sample Response:
```json
{
  "cpu_usage": 25.6,
  "ram_usage": 60.5,
  "battery_status": 85,
  "python_version": "3.10.12",
  "location": "New Delhi",
  "current_time": "2024-12-14 16:35:21",
  "gpu_info": 45.7
}
```

---

## Future Enhancements

- Add system disk usage metrics.
- Improve GPU monitoring to support multiple GPUs.
- Dockerize the application for easy deployment.
- Deploy the project to a cloud platform.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## Contact

For any queries, reach out to **Harsh Agarwal** at [email@example.com](mailto:email@example.com).



