import BottomGradient from "@/components/ui/BottomGradient";
import { FileUpload } from "@/components/ui/file-upload";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LabelInputContainer from "@/components/ui/LabelInputContainer";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddBlog = () => {
  const [files, setFiles] = useState([]);
  const handleFileUpload = (files) => {
    setFiles(files);
    console.log(files);
  };
  const [formData, setFormData] = useState({
    heading: "",
    category: "",
    shortDescription: "",
    descriptions: "",
    thumbnailImg: files,
    img: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", { ...formData, files });
    navigate("/dashboard/settings");
  };

  return (
    <div className="flex flex-1 ">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="w-full overflow-auto mx-auto mt-1 rounded-xl p-6 md:p-8 shadow-lg bg-white dark:bg-black transition-colors duration-300">
          <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
            Add New Blog
          </h2>
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-1">
              <LabelInputContainer className="mb-4">
                <Label htmlFor="heading">Blog Heading </Label>
                <Input
                  id="heading"
                  placeholder="heading"
                  type="text"
                  value={formData.heading}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="category">Category</Label>
                <Input
                  id="category"
                  value={formData.category}
                  onChange={handleChange}
                  as="select"
                  options={[
                    { value: "software", label: "Software Development" },
                    { value: "ai", label: "Artificial Intelligence" },
                    { value: "cybersecurity", label: "Cybersecurity" },
                    { value: "gadgets", label: "Tech Gadgets" },
                    { value: "blockchain", label: "Blockchain & Web3" },
                  ]}
                />
              </LabelInputContainer>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-1">
              <LabelInputContainer className="mb-4">
                <Label htmlFor="shortDescription">Short Description</Label>
                <Input
                  id="shortDescription"
                  placeholder="Write Short Description"
                  as="textarea"
                  type="text"
                  value={formData.shortDescription}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="descriptions">descriptions</Label>
                <Input
                  id="descriptions"
                  as="textarea"
                  placeholder="Write Descriptions ..."
                  type="text"
                  value={formData.descriptions}
                  onChange={handleChange}
                />
              </LabelInputContainer>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-1">
              <FileUpload onChange={handleFileUpload} />
            </div>
            {/* Login Button */}
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-gray-950 dark:to-gray-900 to-neutral-600 block w-full text-white rounded-md h-10 font-medium shadow-md"
              type="submit"
            >
              Add Post &rarr;
              <BottomGradient />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
