document.querySelectorAll('.btn-sensor').forEach(sensor => {
    sensor.addEventListener('mouseover', () => {
        const button = document.querySelector('.btn-button');
        button.classList.add('sensor-hovered');
    });

    sensor.addEventListener('mouseout', () => {
        const button = document.querySelector('.btn-button');
        button.classList.remove('sensor-hovered');
    });
});
