import { useState } from "react";
import patternCircles from "./assets/images/pattern-circles.svg";
import iconCheck from "./assets/images/icon-check.svg";
function App() {
  const [sliderValue, setSliderValue] = useState(2); // 0-4 index for the 5 tiers
  const [isYearly, setIsYearly] = useState(false);

  // Pricing tiers
  const pricingTiers = [
    { pageviews: "10K", price: 8 },
    { pageviews: "50K", price: 12 },
    { pageviews: "100K", price: 16 },
    { pageviews: "500K", price: 24 },
    { pageviews: "1M", price: 36 },
  ];

  const currentTier = pricingTiers[sliderValue];
  const finalPrice = isYearly ? currentTier.price * 0.75 : currentTier.price;
  return (
    <div className="font-Manrope">
      {/* Top section - pale blue background */}
      <div className="bg-light-grayish-blue pt-20 h-[50vh]">
        <div className="relative">
          {/* Background image */}
          <img
            src={patternCircles}
            alt=""
            className="absolute left-1/2 -translate-x-1/2 -translate-y-10 z-0"
          />

          {/* Content on top */}
          <div className="relative z-10">
            <h1 className="text-xl font-bold text-center text-dark-desaturated-blue lg:text-3xl">
              Simple, traffic-based pricing
            </h1>
            <p className="text-center max-w-[220px] mx-auto text-grayish-blue font-medium lg:max-w-none ">
              Sign-up for our 30-day trial. No credit card required
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section - white background */}
      <div className="bg-pricing-card -mt-6 lg:-mt-20 max-w-[90vw] lg:max-w-[50vw] mx-auto rounded-lg pb-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <p className="text-center pt-5 lg:pt-9 text-grayish-blue font-semibold order-1">
            {currentTier.pageviews} PAGEVIEWS
          </p>
          <div
            className=" order-2 
      lg:order-3 
      lg:col-span-2"
          >
            <input
              type="range"
              min="0"
              max="4"
              step="1"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-[80vw] lg:w-[40vw] my-8 lg:mt-3 mx-auto custom-slider block"
              style={{
                "--slider-progress": `${(sliderValue / 4) * 100}%`,
              }}
            />
          </div>
          <div
            className="text-center my-6  order-3 
      lg:order-2"
          >
            <span className="text-4xl font-bold">${finalPrice.toFixed(2)}</span>
            <span className="text-grayish-blue"> / month</span>
          </div>
        </div>
        {/* Toggle for yearly billing */}
        <div className="flex items-center justify-center lg:justify-end gap-3 font-medium lg:mt-8 lg:mr-20">
          <span className="text-xs lg:text-base text-grayish-blue">
            Monthly Billing
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`w-10 lg:w-12 h-4 lg:h-6 rounded-full ${isYearly ? "bg-soft-cyan" : "bg-light-grayish-blue"} relative transition-colors`}
          >
            <div
              className={`w-3 lg:w-4 h-3 lg:h-4 bg-white rounded-full transition-transform ${isYearly ? "translate-x-6" : "translate-x-1"}`}
            ></div>
          </button>
          <span className="text-xs lg:text-base text-grayish-blue">
            Yearly Billing
          </span>
          <span className="bg-red-background text-xs text-red-dis px-2 rounded lg:hidden">
            -25%
          </span>
          {/* Desktop: shows "25% discount" */}
          <span className="bg-red-background text-sm text-red-dis px-2 rounded hidden lg:inline">
            25% discount
          </span>
        </div>
      </div>
      <hr className="w-[90vw] lg:w-[50vw] mx-auto border-light-grayish-blue" />
      <div className="bg-pricing-card max-w-[90vw] lg:max-w-[50vw] mx-auto rounded-lg shadow-lg pb-5 mb-20">
        <div className="lg:flex lg:gap-6 lg:justify-around">
          <div className="pt-4 flex flex-col gap-3 font-semibold">
            <p className="text-center text-grayish-blue text-sm">
              {" "}
              <img src={iconCheck} alt="" className="inline-block mr-2" />
              Unlimited websites
            </p>
            <p className="text-center text-grayish-blue text-sm">
              {" "}
              <img src={iconCheck} alt="" className="inline-block mr-2" />
              100% data ownership
            </p>
            <p className="text-center text-grayish-blue text-sm">
              {" "}
              <img src={iconCheck} alt="" className="inline-block mr-2" />
              Email reports
            </p>
          </div>
          <div className="text-center py-4">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="bg-dark-desaturated-blue hover:bg-light-grayish-blue text-light-grayish-blue hover:text-dark-desaturated-blue px-8 py-2 rounded-full font-semibold inline-block text-center mt-3"
            >
              Start my trial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
