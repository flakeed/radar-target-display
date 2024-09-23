const socket = new WebSocket('ws://localhost:4000');

socket.onopen = () => {
    console.log('Connected to WebSocket server');
};

socket.onmessage = (event) => {
    const radarData = JSON.parse(event.data);
    if (radarData.echoResponses && radarData.echoResponses.length > 0) {
        const targets = radarData.echoResponses.map(response => ({
            time: response.time,
            distance: (300000 * response.time) / 2,
            power: response.power,
            angle: radarData.scanAngle,
        }));
        plotRadarData(targets);
    } else {
        // console.log('No targets detected');
    }
};

socket.onclose = () => {
    console.log('Connection closed');
};

socket.onerror = (error) => {
    console.error('WebSocket Error:', error);
};
