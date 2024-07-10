import Img from "../../assets/images/process.jpg"

const Process = () => {
    return (
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div>
            <img src={Img} alt="" className="rounded-lg  mr-10 mt-10" />
          </div>
          <div className="mx-5">
            <h4 className="text-2xl font-semibold tracking-wider">
              How We Create
            </h4>
            <h4 className="text-4xl font-semibold tracking-wider mb-5">
              Your Dream Living Space
            </h4>
            <p className="mb-3">
              Designing your home or office in a way that creates a symphony
              inside takes organized efforts. We have a defined process of how
              to create and deliver the right design to you. First of all, we
              listen to your requirements carefully, that guide us in making a
              design of your choice.
            </p>
            <div className="ml-3">
              <h5 className="text-2xl mb-3">
                1. <span className="">Meeting with Client</span>
              </h5>
              <p className="mb-3">
                In this stage, we get detailed requirements for the work.
                Interior designers including the project manager attend this
                meeting to get to know the requirements well. The client shares
                whatever he/she needs.
              </p>
              <h5 className="text-2xl mb-3">
                2. <span className="">Project Visit</span>
              </h5>
              <p className="mb-3">
                We visit your project to think about how we can make it an
                awesome place to live or work at. It gives us a better
                understanding of the project and it helps us come up with some
                unique ideas for designing it.
              </p>
              <h5 className="text-2xl mb-3">
                3. <span className="">Space Planning</span>
              </h5>
              <p className="mb-3">
                Planning and setting goals take place in this stage. We prepare
                a plan and share it with the clients to make sure they are
                updated about what he/she is going to have. We also set
                milestones.
              </p>
              <h5 className="text-2xl mb-3">
                4.{" "}
                <span className="">
                  Understanding & Meeting Client Expectations
                </span>
              </h5>
              <p className="mb-3">
                This is one of the core stages of the entire process. Our
                designers engage and create designs that meet your requirements.
                The core designers collaborate with others in the team to make
                sure everything is on track.
              </p>
              <h5 className="text-2xl mb-3">
                5. <span className="">Get Client Approval</span>
              </h5>
              <p className="mb-3">
                We submit the design to you so you can have a look at the design
                before we install it and give your feedback on it. We take your
                feedback to modify the design and work on it again accordingly.
              </p>
              <h5 className="text-2xl mb-3">
                6. <span className="">Project Installation </span>
              </h5>
              <p className="mb-3">
                We implement the design in the spot with a proper setup. The
                operations team does this job while the project manager visits
                it to see if it’s going on in the right way. Thus, you get an
                impressive design.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Process;