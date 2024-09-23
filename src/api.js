async function updateRadarConfig(config) {
    try {
        const response = await fetch('http://localhost:4000/config', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(config),
        });
        alert('Radar config updated');
        return await response.json();
    } catch (error) {
        console.error('Error updating radar config:', error);
    }
}

document.getElementById('radar-config-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const measurementsPerRotation = document.getElementById('measurementsPerRotation').value;
    const rotationSpeed = document.getElementById('rotationSpeed').value;
    const targetSpeed = document.getElementById('targetSpeed').value;

    const config = {
        measurementsPerRotation: parseInt(measurementsPerRotation, 10),
        rotationSpeed: parseInt(rotationSpeed, 10),
        targetSpeed: parseInt(targetSpeed, 10),
    };

    await updateRadarConfig(config);
    console.log('Radar config updated:', config);
});
