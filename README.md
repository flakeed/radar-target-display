# Radar Target Display
**Status**: *Completed*

## Project Overview
This project implements a web-based visualization system for radar measurements. It connects to a radar emulation service via WebSocket, processes the received data in real-time, and displays detected targets on a polar chart.
![image](https://github.com/user-attachments/assets/66e4bb54-1f87-4399-8ef8-4973387b0396)

## Features
- **Real-time Data Visualization**:
  - Displays radar targets on a polar chart.
  - Updates in real-time as new data is received.

- **WebSocket Communication**:
  - Establishes a WebSocket connection to the radar emulation service.
  - Processes incoming radar measurement data.

- **Radar Configuration**:
  - Allows adjustment of radar parameters through a user interface.
  - Sends configuration updates to the radar emulation service via API.

- **Target Representation**:
  - Uses different colors and sizes to represent signal strength of detected targets.

## Project Structure
## How to Run

### 1. Setting up the Radar Emulation Service
```bash
docker pull iperekrestov/university:radar-emulation-service
docker run --name radar-emulator -p 4000:4000 iperekrestov/university:radar-emulation-service
```

### 2. Setting up the Web Application
```bash
# Install the dependencies 
npm i

# Start live-server and select public folder
npm start
# Or
live-server
```
