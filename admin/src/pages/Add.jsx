import { useState } from 'react';


const Add = () => {
  
  const [file, setFile] = useState(null)
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Indoor');
  const [price, setPrice] = useState('');
  const [isBestSeller, setIsBestSeller] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);  // Store file for upload
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('adminToken'); 

    try {
      const formData = new FormData();
      formData.append('image', file); // Add image file
      formData.append('name', productName); // Add product name
      formData.append('description', description); // Add description
      formData.append('category', category); // Add category
      formData.append('price', price); // Add price
      formData.append('bestseller', isBestSeller); // Add bestseller status
  
      const response = await fetch('http://localhost:8080/api/add', {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${token}` // Optional if auth is used
        }
      });
      
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
  
      const data = await response.json();
      console.log(data);
      alert('Product added successfully!');
      console.log(data.product); // Handle the new product object
  
    } catch (error) {
      console.error('Error:', error.message);
      alert(`Error: ${error.message}`);
    }
  };
  

  return (
    <form className='flex flex-col w-full items-start gap-3' onSubmit={handleSubmit}>
      <div>
      <p className="mb-2 text-sm text-gray-700">Upload Image</p>
      <input type="file" id='images' onChange={handleFileChange} className='block w-full px-3 py-2 border border-gray-300 rounded' />
      </div>

    <div className='w-full'>
      <p className='mb-2'>Product name</p>
      <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Type here' value={productName}  onChange={(e) => setProductName(e.target.value)} required  />
    </div>

    <div className='w-full'>
      <p className='mb-2'>Description</p>
      <textarea className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='Write content here'  value={description} onChange={(e) => setDescription(e.target.value)}  required />
    </div>
    
    <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>

      <div>
        <p className='mb-2'>Category</p>
        <select className='w-full px-3 py-2'value={category} onChange={(e) => setCategory(e.target.value)} >
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
        </select>
      </div>
          
      
      <div>
        <p className='mb-2'>Price</p>
        <input className='w-full max-w-[500px] px-3 py-2 sm:w-[120px]' type="text" placeholder='Enter price' value={price} onChange={(e) => setPrice(e.target.value)} required />
      </div>

    </div>

    <div className='flex gap-2 mt-2'>
      <input type="checkbox" id='bestseller' checked={isBestSeller} onChange={(e) => setIsBestSeller(e.target.checked)} />
      <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
    </div>

    <button type="submit" className='w-28 py-3 mt-4 bg-black text-white'>ADD</button>

    </form>
  );
};

export default Add;
