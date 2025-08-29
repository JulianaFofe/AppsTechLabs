import { useState, type ChangeEvent, type FormEvent } from "react"
import { BiImageAdd, BiSolidFilePdf } from "react-icons/bi"
import axios from "axios"


interface FormData {
  fullName: string
  school: string
  department: string
  email: string
  phoneNumber: string
  recomLetter: File | null
  appLetter: File | null
  cv: File | null
  profilePic: File | null
  whyHire: string
  professional: boolean
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    school: "",
    department: "",
    email: "",
    phoneNumber: "",
    recomLetter: null,
    appLetter: null,
    cv: null,
    profilePic: null,
    whyHire: "",
    professional: false,
  })
  const [preview, setPreview] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement
    const { value, name, type } = e.target
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: target.checked,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target
    if (files && files.length > 0) {//checks if a file exist
      setFormData({
        ...formData,
        [name]: files[0],
      })
      if(name === "profilePic"){
        const reader = new FileReader();
        reader.onloadend = () =>{  //to display the iimage itself not just the file name
            setPreview(reader.result as string)
        };
        reader.readAsDataURL(files[0])
      }
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()//prevents browsers default form submission
    if(!formData.cv){
      alert("please upload your cv")
      return
    }
    if(!formData.appLetter){
      alert("please upload your application letter")
      return
    }
    if(!formData.recomLetter){
      alert("please upload your recommendation letter")
      return
    }
    const data  = new FormData()//formData  a special object used to send data and fies to the backend
    data.append("full_name", formData.fullName);
    data.append("email", formData.email);
    data.append("school", formData.school)
    data.append("department", formData.department);
    data.append("message", formData.whyHire);
    data.append("phone_number",formData.phoneNumber)
    data.append("professional", formData.professional? "true":"false");

    //for the files
    if(formData.cv) data.append("cv", formData.cv)
    if(formData.recomLetter) data.append("recommendation_letter", formData.recomLetter)
    if(formData.appLetter) data.append("application_letter", formData.appLetter)
    if(formData.profilePic) data.append("photo", formData.profilePic)

    //connecting to the backend(fastapi) using axios
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/internships/", data,
        {
          headers:{"Content-Type":"multipart/form-data"}
        }
      )
      console.log("success",response.data);
      setSubmitted(true)//display the success message from the frontend
      setTimeout(()=>setSubmitted(false), 5000)//the message disappears after 5seconds
    }catch(error:any){
      console.error("error submitting form", error.response || error)//contains message from backedn if available
      alert("failed to submit form")//displays an error message to the user if submission fails
    }
  }

  return (
    <div className="py-[6rem]">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-2xl inset-shadow-sm">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">Internship</h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          This internship is for a period of 3 months: July to September
        </p>
        {
          submitted && (<div className="bg-blue-400 text-white text-center rounded-md shadow-md p-3 mb-4">Internship application submitted successfully via email</div>)//displays success message when submitted is true
        }
        <div className="flex flex-col gap-4 justify-between items-center mb-6 p-8 sm:flex sm:flex-row gap-4 "> {/* div for image */}
            <label
              htmlFor="profilePic"
              className="flex flex-col items-center justify-center w-32 h-32 rounded-full border-2 border-dashed border-gray-400 hover:border-blue-500 cursor-pointer transition"
            >
               {preview? (<img src={preview} alt="preview" className="w-full h-full object-cover rounded-full"/>)//displays the image itself
               :(
               <>
                <BiImageAdd className="text-gray-400 text-5xl mb-1" />
                <span className="text-sm text-gray-600">Upload Photo</span>
               </>//displays the photo logo if no image and the placeholder "upload photo"
              )}
      
              <input
                id="profilePic"
                type="file"
                name="profilePic"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden" //prevents the default attributes for an input field expecting a file
                required
              />
            </label>
            <button
              type="submit"
              form="internshipForm"
              style={{backgroundColor:"#98002E"}}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded shadow "
            >
              Apply
            </button>
        </div>
        <form onSubmit={handleSubmit} id="internshipForm" className="space-y-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* styles for left column */}
            <div className="space-y-4">
              <input
                placeholder="Full Name"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <input
                placeholder="Phone Number(e.g 671453812)"
                type="tel"
                name="phoneNumber"
                pattern="^6[0-9]{8}$"
                maxLength={9}
                minLength={9}
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <label className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded cursor-pointer hover:border-blue-500">
                <span className="text-sm text-gray-600">{formData.cv?.name || "UPload CV"}</span>
                <BiSolidFilePdf className="text-secondary text-3xl" />
                <input
                  type="file"
                  name="cv"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
      
      
            </div>
            {/* styles for right column */}
            <div className="space-y-4">
              <input
                placeholder="Department"
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <input
                placeholder="School"
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <label className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded cursor-pointer hover:border-blue-500">
                <span className="text-sm text-gray-600">{formData.recomLetter?.name||"Recommendation Letter"}</span>
                <BiSolidFilePdf  className="text-secondary text-3xl" />
                <input
                  type="file"
                  name="recomLetter"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <label className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded cursor-pointer hover:border-blue-500">
                <span className="text-sm text-gray-600">{formData.appLetter?.name||"Application Letter"}</span>
                <BiSolidFilePdf className="text-secondary text-3xl" />
                <input
                  type="file"
                  name="appLetter"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
          <textarea
                name="whyHire"
                placeholder="Why should we hire you as an intern?"
                value={formData.whyHire}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                rows={4}
              />
          <div className="flex items-center gap-2">
                <label className="text-lg text-gray-700 font-bold">(professional interns only)</label>
                <input
                  type="checkbox"
                  name="professional"
                  checked={formData.professional}
                  onChange={handleChange}
                />
           </div>
        </form>
      </div>
    </div>
  )
}

export default Form
