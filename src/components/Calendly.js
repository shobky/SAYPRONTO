import React, { useEffect } from 'react';
import './calendly.css'

const CalendlyWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://assets.calendly.com/assets/external/widget.js';

        const head = document.querySelector('head');
        head.appendChild(script);

        return () => {
            head.removeChild(script);
        };
    }, []);

    return (
        <div className='calednly-container'>
            <div className="calendly-inline-widget" data-url="https://calendly.com/shobky?hide_landing_page_details=1&amp;hide_gdpr_banner=1" ></div>
        </div>
    );
};

export default CalendlyWidget;
