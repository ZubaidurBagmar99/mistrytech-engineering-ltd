const States = () => {
  return (
    <div className="w-full py-10">
      <div className="stats shadow w-full flex justify-around">
        <div className="stat place-items-center">
          <div className="stat-value mb-1">31+</div>
          <div className="stat-desc">YEARS OF EXPERIENCE</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value text-secondary mb-1">80%</div>
          <div className="stat-desc text-secondary">CLIENTS SATISFACTION</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value mb-1">5460 sqm</div>
          <div className="stat-desc">SPACE INNOVATED</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-value mb-1">125+</div>
          <div className="stat-desc">PROJECTS DONE</div>
        </div>
      </div>
    </div>
  );
};

export default States;
