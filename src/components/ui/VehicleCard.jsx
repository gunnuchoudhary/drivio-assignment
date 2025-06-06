export default function VehicleCard({ item }) {
    return (
      <div className="flex-[0_0_50%]  md:flex-[0_0_33%] lg:flex-[0_0_25%] px-2">
        <div className="border border-[#CBCBCB] rounded-2xl overflow-hidden bg-white">
          <a href={`/`}>
            <img
              src={item.model_image_url}
              alt={item.model_display_name}
              className="w-full h-48 object-cover"
              style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
            />
          </a>
          <div className="p-1 text-xs lg:text-sm">
            <h4 className="font-semibold mb-2">{item.model_display_name}</h4>
            <div className="flex justify-between">
              <div >
                <div className="text-dark/70 mb-1">EMI starts at</div>
                <div className="font-semibold text-dark mb-2">
                  ₹{Math.round(item.min_on_road_price / 12)}
                </div>
              </div>
              <div>
                <div className=" text-dark/70 mb-1">On Road Price</div>
                <div className="font-semibold text-dark">
                  ₹{item.min_on_road_price}
                </div>
              </div>
            </div>
  
            <div className="flex justify-between   text-xs lg:text-sm">
              <a
                href={`/`}
                className="py-1 px-3 bg-black text-center text-white rounded-full "
              >
                View Details
              </a>
              <button className="py-1 bg-green-600 text-white rounded-full ">
                Get June Offers
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  