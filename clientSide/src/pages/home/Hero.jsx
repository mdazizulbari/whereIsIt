import React from "react";

const Hero = () => {
  return (
    <section className="flex justify-center">
      <div className="carousel w-5xl py-20">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="flex flex-col items-center justify-center gap-3 md:mx-auto max-w-3xl text-center mx-20">
            <h2
              className="text-3xl font-bold text-primary"
            >
              Reunite with Your Lost Treasures
            </h2>
            <p>
              Have you misplaced something valuable? WhereIsIt is here to help
              you reconnect with your lost items. Report your belongings with
              ease, and let our community assist in bringing them back to you.
              Start your journey to recovery today!
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="flex flex-col items-center justify-center gap-3 md:mx-auto max-w-3xl text-center mx-20">
            <h2 className="text-3xl font-bold text-primary">
              Discover Found Items Near You
            </h2>
            <p>
              Found something that doesn’t belong to you? Upload it to WhereIsIt
              and help return it to its rightful owner. Browse our latest finds,
              connect with those in need, and make a difference in your
              community with just a few clicks.
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="flex flex-col items-center justify-center gap-3 md:mx-auto max-w-3xl text-center mx-20">
            <h2 className="text-3xl font-bold text-primary">
              Stay Connected, Stay Secure
            </h2>
            <p>
              Our platform ensures a safe and secure environment for reporting
              and recovering items. With user authentication and real-time
              updates, WhereIsIt keeps you informed and protected. Join now to
              experience a reliable lost-and-found solution!
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div className="flex flex-col items-center justify-center gap-3 md:mx-auto max-w-3xl text-center mx-20">
            <h2 className="text-3xl font-bold text-primary">
              Expand Your Recovery Network
            </h2>
            <p>
              Join a growing community of users dedicated to reuniting lost
              items with their owners. With WhereIsIt, you can expand your
              network, share updates, and increase your chances of recovery.
              Sign up today and be part of the solution!
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
