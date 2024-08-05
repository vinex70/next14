const CreateForm = () => {
  return (
    <div>
      <form action="">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border-gray-300 text-grey-900 text-sm rounded-sm focus:ring-blue-500 focus:boreder-blue-500 block w-full p-2.5"
            placeholder="Full Name..."
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="bg-gray-50 border-gray-300 text-grey-900 text-sm rounded-sm focus:ring-blue-500 focus:boreder-blue-500 block w-full p-2.5"
            placeholder="Phone Number..."
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="bg-gray-50 border-gray-300 text-grey-900 text-sm rounded-sm focus:ring-blue-500 focus:boreder-blue-500 block w-full p-2.5"
            placeholder="E-mail..."
          />
        </div>
        <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
