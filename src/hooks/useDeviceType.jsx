import { useState, useEffect } from 'react';

const useDeviceType = () => {
    const [device, setDevice] = useState(getDeviceType());

    function getDeviceType() {
        const deviceWidth = window.innerWidth;
        if (deviceWidth < 400) {
            return 'mobile';
        } else if (deviceWidth >= 400 && deviceWidth < 800) {
            return 'tablet';
        } else {
            return 'laptop';
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setDevice(getDeviceType());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return device;
};

export default useDeviceType;
