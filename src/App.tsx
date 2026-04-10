import axios from "axios"
import React, { useEffect, useState } from "react"

const App = () => {
  const [customers, setCustomers] = useState([])

  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [isAdmin, setIsAdmin] = useState(false)
  const [email, setEmail] = useState("")

  const fetchCustomer = async () => {
    try {
      const res: any = await axios.get("http://localhost:5000/api/v1/customer")
      console.log(res)
      setCustomers(res.data.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchCustomer()
  }, [])

  const handleSaveCustomer = async (e: any) => {
    e.preventDefault()

    if (!name || !age) {
      return alert("Please fill all fields..!")
    }

    try {
      const res = await axios.post("http://localhost:5000/api/v1/customer", {
        name,
        age: Number(age),
        isAdmin,
        email
      })
      
      alert("Customer saved")
      fetchCustomer()

      setName("")
      setAge(0)
      setIsAdmin(false)
      setEmail("")
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="m-2">
      <div className="bg-white w-[500px] mx-auto p-8 rounded-lg shadow-lg mb-10 border-b-8 border-green-500 flex flex-col gap-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Customer
        </h2>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Age"
          className="w-full p-2 border rounded"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <label className="flex items-center space-x-3 cursor-pointer">
          <input
            type="checkbox"
            className="w-5 h-5"
            checked={isAdmin}
            onChange={() => setIsAdmin(!isAdmin)}
          />
          <span className="text-gray-700 font-semibold">Is Admin?</span>
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleSaveCustomer}
          className="w-full bg-green-600 text-white font-bold py-2 rounded hover:bg-green-700 transition"
        >
          Save
        </button>
      </div>
      <div className="flex flex-wrap gap-5 justify-center">
        {customers.map((customer: any) => (
          <div className="bg-white w-72 p-6 rounded-lg shadow-lg border-t-8 border-indigo-600">
            <h1 className="text-lg font-extrabold text-gray-800 border-b pb-2 mb-4">
              Name: {customer?.name || "N/A"}
            </h1>
            <p className="text-gray-700 font-semibold my-1">
              Age: {customer?.age || "N/A"}
            </p>
            <p className="text-gray-700 font-semibold my-1">
              Admin: {customer?.isAdmin ? "YES" : "NO"}
            </p>
            <p className="text-gray-700 font-semibold my-1">
              Email: {customer?.email || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
