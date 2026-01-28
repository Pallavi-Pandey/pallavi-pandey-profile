import React from 'react';

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 grid-bg overflow-hidden">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-brand-accent/10 blur-[100px] rounded-full" />
            <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-brand-secondary/5 blur-[80px] rounded-full" />
        </div>
    );
};

export default Background;
