import {useState} from 'react'

const CreateListing = () => {
const [cformData, setCFormData] = useState({
    type:"rent",
    name:"",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    offer: false,
    regularPrice:0,
    discount:0,
    address:"",
    description:""
});
const {type,name,bedrooms,bathrooms,discount,parking,furnished,address,description,offer,regularPrice } = cformData;
const onChange = () =>{

}
  return (
    <main className='max-w-md p-2 mx-auto'>
        <h1 className='text-4xl font-serif text-center p-2'>Create A Listing</h1>
        <form className=''>
            <p className='px-4 '>Sell Or Rent</p>
            <div className='btn-group flex items-center gap-4 justify-between px-4'>
                <button type="submit" id='type' value="sell" onClick={onChange}
                className={`px-8 font-medium text-sm uppercase  py-2 bg-slate-200 shadow-md rounded hover:shadow-xl focus:shadow-2xl transition duration-150 ease-in-out w-full 
                ${ type === "rent" ? "bg-white": "bg-slate-600 text-white"}
                `}
                >Sell</button>
                <button type="submit" id='type' value="sell" onClick={onChange}
                className={`px-8 font-medium text-sm uppercase  py-2 bg-slate-200 shadow-md rounded hover:shadow-xl focus:shadow-2xl transition duration-150 ease-in-out w-full 
                ${ type === "sell" ? "bg-white": "bg-slate-600 text-white"}
                `}
                >Rent</button>
            </div>
            <div className="name p-4">
            <p className='text-sm  '>Name</p>
                <input type="text" id='name' value={name} onChange={onChange} placeholder="Property name" maxLength="32" minLength="10" required className="w-full text-sm rounded outline-none text-gray-600 focus:border-gray-600 focus:outline-none px-4 transition duration-150 ease-in-out"/>
            </div>
            <div className="bed-bath px-4 flex items-center justify-between gap-4">
                <div className="bed">
                    <p className='text-sm  '>Beds</p>
                    <input type="number" id='bedrooms' value={bedrooms} onChange={onChange} min="1" max="50" required
                    className='px-4 text-sm text-gray-700 bg-white rounded border border-gray-400 transition duration-150 text-center ease-in-out focus:border-gray-400 '
                    />
                </div>
                <div className="bath">
                    <p className='text-sm  '>Baths</p>
                    <input type="number" id='bathrooms' value={bathrooms} onChange={onChange} min="1" max="50" required
                    className='px-4 text-sm text-gray-700 bg-white rounded border border-gray-400 transition duration-150 text-center ease-in-out focus:border-gray-400 '
                    />
                </div>
            </div>
            <p className='px-4 mt-4'>Parking Spot</p>
            <div className='btn-group flex items-center gap-4 justify-between px-4'>
                <button type="submit" id='parking' value={true} onClick={onChange}
                className={`px-8 font-medium text-sm uppercase  py-2 bg-slate-200 shadow-md rounded hover:shadow-xl focus:shadow-2xl transition duration-150 ease-in-out w-full 
                ${ !parking ? "bg-white": "bg-slate-600 text-white"}
                `}
                >yes</button>
                <button type="submit" id='parking' value={false} onClick={onChange}
                className={`px-8 font-medium text-sm uppercase  py-2 bg-slate-200 shadow-md rounded hover:shadow-xl focus:shadow-2xl transition duration-150 ease-in-out w-full 
                ${ parking ? "bg-white": "bg-slate-600 text-white"}
                `}
                >no</button>
            </div>
            <p className='px-4 mt-4'>Furnished</p>
            <div className='btn-group flex items-center gap-4 justify-between px-4 '>
                <button type="submit" id='furnished' value={true} onClick={onChange}
                className={`px-8 font-medium text-sm uppercase  py-2 bg-slate-200 shadow-md rounded hover:shadow-xl focus:shadow-2xl transition duration-150 ease-in-out w-full 
                ${ !furnished ? "bg-white": "bg-slate-600 text-white"}
                `}
                >yes</button>
                <button type="submit" id='furnished' value={false} onClick={onChange}
                className={`px-8 font-medium text-sm uppercase  py-2 bg-slate-200 shadow-md rounded hover:shadow-xl focus:shadow-2xl transition duration-150 ease-in-out w-full 
                ${ furnished ? "bg-white": "bg-slate-600 text-white"}
                `}
                >no</button>
            </div>
            <div className="address p-4">
            <p className='text-sm  '>Address</p>
                <textarea type="text" id='address' value={address} onChange={onChange} placeholder="Property address" maxLength="132" minLength="10" required className="w-full text-sm rounded outline-none text-gray-600 focus:border-gray-600 focus:outline-none px-4 transition duration-150 ease-in-out"/>
            </div>
            <div className="description px-4">
            <p className='text-sm '>Description</p>
                <textarea type="text" id='description' value={description} onChange={onChange} placeholder="Property description" maxLength="132" minLength="10" required className="w-full text-sm rounded outline-none text-gray-600 focus:border-gray-600 focus:outline-none px-4 transition duration-150 ease-in-out"/>
            </div>
            <p className='px-4'>Offer</p>
            <div className='btn-group flex items-center gap-4 justify-between px-4 '>
                <button type="submit" id='offer' value={true} onClick={onChange}
                className={`px-8 font-medium text-sm uppercase  py-2 bg-slate-200 shadow-md rounded hover:shadow-xl focus:shadow-2xl transition duration-150 ease-in-out w-full 
                ${ !offer ? "bg-white": "bg-slate-600 text-white"}
                `}
                >yes</button>
                <button type="submit" id='offer' value={false} onClick={onChange}
                className={`px-8 font-medium text-sm uppercase  py-2 bg-slate-200 shadow-md rounded hover:shadow-xl focus:shadow-2xl transition duration-150 ease-in-out w-full 
                ${ offer ? "bg-white": "bg-slate-600 text-white"}
                `}
                >no</button>
            </div>
            <div className="regular-pr px-4 mt-2">
                    <p>Regular Price</p>
                <div className="discount flex items-center justify-between space-x-2 ">
                    <input type="number" placeholder='$' id='regularPrice' value={regularPrice} onChange={onchange} min="50" max="5000000" required className=" text-sm rounded outline-none text-gray-600 focus:border-gray-600 focus:outline-none text-center px-4 transition duration-150 ease-in-out"/>
                    {
                        type === "rent"? <div className="rent-per-month flex items-center ">
                            <p className='text-xs'>$ Rent / Month</p>
                            <input type="number" placeholder='$' id='regularPrice' value={regularPrice} onChange={onchange} min="50" max="5000000" required className="w-full text-sm rounded outline-none text-gray-600 focus:border-gray-600 focus:outline-none text-center px-4 transition duration-150 ease-in-out"/>
                        </div> :""
                    }
                </div>
            </div>
            {
                offer && (
                    <div className="regular-pr px-4 mt-2">
                    <p>Discount Price</p>
                        <div className="reg flex items-center justify-between space-x-2 ">
                            <input type="number" placeholder='$' id='discount' value={discount} onChange={onchange} min="50" max="5000000" required className="w-full text-sm rounded outline-none text-gray-600 focus:border-gray-600 focus:outline-none text-center px-4 transition duration-150 ease-in-out"/>
                            {/* {
                                type === "rent"? <div className="rent-per-month flex items-center ">
                                    <p className='text-xs'>$ Rent / Month</p>
                                    <input type="number" placeholder='$' id='regularPrice' value={regularPrice} onChange={onchange} min="50" max="5000000" required className="w-full text-sm rounded outline-none text-gray-600 focus:border-gray-600 focus:outline-none text-center px-4 transition duration-150 ease-in-out"/>
                                </div> :""
                            } */}
                        </div>
                    </div>
                )
            }
            <div className="image-container p-4 ">
                <h2 className='text-md font-bold pb-2'>Upload Image</h2>
                <p className='text-xs'>Choose image and image will cover( max 6)</p>
                <input type="file" id='image' onchange={onChange} accept = ".jpg , .png ,.jpeg" multiple required className='w-full bg-slate-200 rounded border-none outline-none'/>
            </div>
           <div className="btn px-4">
             <button type='submit' className='mb-8 py-2 w-full text-slate-50  bg-blue-700 rounded shadow-md hover:shadow-2xl'>Create</button>
            </div>
        </form>
    </main>
  )
}

export default CreateListing