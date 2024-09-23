function plotRadarData(data) {
    const angles = [];
    const distances = [];
    const targets = [];
    const colors = [];
    const sizes = [];

    data.forEach(target => {
        const distance = target.distance;
        const angle = target.angle;
        const power = target.power;

        if (distance && distance > 0) {
            angles.push(angle);
            distances.push(distance);
            targets.push({ distance, angle, power });

            if (power > 0.8) {
                colors.push('rgb(255, 0, 0)');
                sizes.push(30);
            } else if (power > 0.5) {
                colors.push('rgb(255, 165, 0)');
                sizes.push(15);
            } else {
                colors.push('rgb(0, 255, 0)');
                sizes.push(7.5);
            }

        }
    });

    const trace = {
        type: 'scatterpolar',
        mode: 'markers',
        r: distances,
        theta: angles,
        marker: {
            color: colors,
            size: sizes,
            symbol: 'circle',
        },
    };

    const layout = {
        polar: {
            radialaxis: {
                visible: true,
                range: [0, 200],
            },
        },
        showlegend: false,
    };

    Plotly.newPlot('radar-chart', [trace], layout);
}