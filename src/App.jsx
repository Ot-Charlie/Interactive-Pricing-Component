import { useState } from 'react'
import patternCircles from './assets/images/pattern-circles.svg'

function App() {
  const [sliderValue, setSliderValue] = useState(2) // 0-4 index for the 5 tiers
  const [isYearly, setIsYearly] = useState(false)
  
  // Pricing tiers
  const pricingTiers = [
    { pageviews: '10K', price: 8 },
    { pageviews: '50K', price: 12 },
    { pageviews: '100K', price: 16 },
    { pageviews: '500K', price: 24 },
    { pageviews: '1M', price: 36 }
  ]
  
  const currentTier = pricingTiers[sliderValue]
  const finalPrice = isYearly ? currentTier.price * 0.75 : currentTier.price
  return (
    <div>
      {/* Top section - pale blue background */}
      <div className="bg-very-pale-blue pt-20 h-[50vh]">
        <div className="relative">
          {/* Background image */}
          <img 
            src={patternCircles} 
            alt="" 
            className="absolute left-1/2 -translate-x-1/2 -translate-y-10 z-0"
          />
          
          {/* Content on top */}
          <div className="relative z-10">
            <h1 className="text-xl font-bold text-center">
              Simple, traffic-based pricing
            </h1>
            <p className="text-center max-w-[220px] mx-auto">
              Sign-up for our 30-day trial. No credit card required
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section - white background */}
      <div className="bg-pricing-card -mt-6 max-w-[90vw] mx-auto rounded-lg shadow-lg">
      <p className='text-center pt-5'>{currentTier.pageviews} PAGEVIEWS</p>
       <input 
          type="range" 
          min="0" 
          max="4" 
          step="1"
          value={sliderValue}
          onChange={(e) => setSliderValue(Number(e.target.value))}
          className="w-[80vw] my-8 mx-auto custom-slider block"  style={{
    '--slider-progress': `${(sliderValue / 4) * 100}%`
  }}
        />
         <div className="text-center my-6">
          <span className="text-4xl font-bold">${finalPrice.toFixed(2)}</span>
          <span className="text-gray-500"> / month</span>
        </div>
              {/* Toggle for yearly billing */}
        <div className="flex items-center justify-center gap-3">
          <span className='text-xs'>Monthly Billing</span>
          <button 
            onClick={() => setIsYearly(!isYearly)}
            className={`w-10 h-4 rounded-full ${isYearly ? 'bg-soft-cyan' : 'bg-gray-300'}`}
          >
            <div className={`w-3 h-3 bg-white rounded-full transition-transform ${isYearly ? 'translate-x-6' : 'translate-x-1'}`}></div>
          </button>
          <span className='text-xs'>Yearly Billing</span>
          <span className="bg-red-background text-xs text-red-dis px-2 rounded">-25%</span>
        </div>
      </div>
    </div>
  )
}

export default App