export default function Home() {
  return (
    <div className="flex h-screen bg-gray-900 items-center justify-center">
      <div className="m-8 bg-red-500 w-32 h-32 p-4">
        <div className="bg-blue-500 w-full h-full flex items-center justify-center text-white">
          Inner
        </div>
      </div>
    </div>
  )
}
