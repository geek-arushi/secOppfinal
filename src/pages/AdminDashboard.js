import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [like, setLike] = useState("");
  const [desc2, setDesc2] = useState("");
  const [image, setImage] = useState(null);
  const [showToast, setShowToast] = useState(false);
// for page
  const [pageImage1, setPageImage1] = useState(null);
  const [titledesc, setTitleDesc] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [advSysmptoms, setAdvSysmptoms] = useState("");
  const [pageImage2, setPageImage2] = useState(null);
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");
  const [prognosis, setPrognosis] = useState("");
  const [pageImage3, setPageImage3] = useState(null);
  const [pageImage4, setPageImage4] = useState(null);


  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("image", image);
    formData.append("desc2", desc2);
    formData.append("like", like);
    // for page
    formData.append("pageImage1", pageImage1);
    formData.append("titledesc", titledesc);
    formData.append("symptoms", symptoms);
    formData.append("advSysmptoms", advSysmptoms);
    formData.append("pageImage2", pageImage2);
    formData.append("diagnosis", diagnosis);
    formData.append("treatment", treatment);
    formData.append("prognosis", prognosis);
    formData.append("pageImage3", pageImage3);
    formData.append("pageImage4", pageImage4);


    const token = localStorage.getItem("token");

    try {
      await axios.post("https://secopbackend.onrender.com/api/blog", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      // Reset form fields
// Reset fields
setTitle("");
setDesc("");
setDesc2("");
setLike("");
setImage(null);

// Reset page-specific fields
setPageImage1(null);
setTitleDesc("");
setSymptoms("");
setAdvSysmptoms("");
setPageImage2(null);
setDiagnosis("");
setTreatment("");
setPrognosis("");
setPageImage3(null);
setPageImage4(null);

// Reset all file inputs manually
document.querySelectorAll('input[type="file"]').forEach((input) => {
  input.value = null;
});

      // Refresh blog list
      const res = await axios.get("https://secopbackend.onrender.com/api/blog");
      setBlogs(res.data);

      // Show toast
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      alert("Error creating blog");
    }
  };

  useEffect(() => {
    axios.get("https://secopbackend.onrender.com/api/blog").then((res) => {
      setBlogs(res.data);
    });
  }, []);

  return (
    <section>
      <div>
        <h1 className="text-center fs-1 py-4 border border-3 rounded border-success m-2">
          Admin <span className="text-danger">Dashboard</span>
        </h1>

        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="card shadow-sm p-4" style={{ backgroundColor: "#c7d2db" }}>
                <h2 className="mb-4 text-center text-primary">Create Blog</h2>
                <hr />
                <span className="text-danger fs-4 text-center">Adding Data for blog Card* </span>
                <hr />
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Description"
                    rows="3"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Description 2"
                    rows="3"
                    value={desc2}
                    onChange={(e) => setDesc2(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Like"
                    rows="1"
                    value={like}
                    onChange={(e) => setLike(e.target.value)}
                  />
                </div>

                <div className="form-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </div>


                {/* Data For page   adding all things for page */}

                <hr />
                <span className="text-danger fs-4 text-center">Adding Data for blog Page* </span>
                <hr />
                {/* img1 */}
                <div className="form-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setPageImage1(e.target.files[0])}
                  />
                </div>

                {/* after leave a comment */}
                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Title Description "
                    rows="3"
                    value={titledesc}
                    onChange={(e) => setTitleDesc(e.target.value)}
                  />
                </div>

                {/* Symptoms */}

                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Symptoms"
                    rows="3"
                    value={symptoms}
                    onChange={(e) => setSymptoms(e.target.value)}
                  />
                </div>

                {/* Advanced Disease Symptoms */}

                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Advanced Disease Symptoms"
                    rows="3"
                    value={advSysmptoms}
                    onChange={(e) => setAdvSysmptoms(e.target.value)}
                  />
                </div>

                {/* img2 */}

                <div className="form-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setPageImage2(e.target.files[0])}
                  />
                </div>


                {/* Diagnosis */}

                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Diagnosis"
                    rows="3"
                    value={diagnosis}
                    onChange={(e) => setDiagnosis(e.target.value)}
                  />
                </div>

                {/* treatment */}

                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Treatment"
                    rows="3"
                    value={treatment}
                    onChange={(e) => setTreatment(e.target.value)}
                  />
                </div>

                {/* Prognosis */}

                <div className="form-group mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Prognosis"
                    rows="3"
                    value={prognosis}
                    onChange={(e) => setPrognosis(e.target.value)}
                  />
                </div>

                {/* img3 */}

                <div className="form-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setPageImage3(e.target.files[0])}
                  />
                </div>

                {/* img4 */}

                <div className="form-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setPageImage4(e.target.files[0])}
                  />
                </div>


                <div className="text-center">
                  <button className="btn btn-primary px-5" onClick={handleSubmit}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Blogs */}
        <div className="container my-5">
          <div className="row">
            {blogs.map((b) => (
              <div key={b._id} className="col-12 col-sm-6 col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                  <img
                    src={b.imageUrl}
                    alt={b.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{b.title}</h5>
                    <p className="card-text">{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="toast-container position-fixed bottom-0 end-0 p-3" style={{ zIndex: 9999 }}>
          <div className="toast show align-items-center text-white bg-success border-0" role="alert">
            <div className="d-flex">
              <div className="toast-body">Blog created successfully!</div>
              <button
                type="button"
                className="btn-close btn-close-white me-2 m-auto"
                onClick={() => setShowToast(false)}
              ></button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminDashboard;
