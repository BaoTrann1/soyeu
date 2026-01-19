import { useState } from 'react'

function App() {
  // --- PHẦN 1: DỮ LIỆU (Bạn sửa thông tin ở đây) ---
  const myProfile = {
    name: "Nguyễn Dương Bảo Trấn",
    role: "Frontend Developer (React.js)",
    // Sử dụng link ảnh online để hiển thị ngay, bạn có thể thay bằng đường dẫn file ảnh trong máy sau
    avatar: "https://ui-avatars.com/api/?name=Nguyen+Van+A&background=0D8ABC&color=fff&size=200", 
    about: "Tôi là một lập trình viên đam mê tạo ra các giao diện web đẹp và dễ sử dụng. Tôi có 2 năm kinh nghiệm làm việc với React và luôn sẵn sàng học hỏi các công nghệ mới như Next.js và TypeScript.",
    contact: {
      email: "tranb2204212@student.ctu.edu.vn",
      phone: "0834722194",
      location: "Vĩnh Long, Việt Nam",
      github: "https://github.com/BaoTrann1"
    },
    skills: ["React.js", "JavaScript", "Tailwind CSS", "Git/GitHub", "HTML5/CSS3", "Figma"],
    experiences: [
      {
        id: 1,
        company: "Đại học Cần Thơ",
        role: "Frontend Developer",
        time: "2024 - Hiện tại",
        description: "Phát triển giao diện Dashboard cho khách hàng sử dụng React."
      },
      {
        id: 2,
        company: "Startup XYZ",
        role: "Fresher Web Developer",
        time: "2022 - 2023",
        description: "Tham gia xây dựng Landing page và hỗ trợ fix bug cho dự án thương mại điện tử."
      }
    ],
    education: [
      {
        id: 1,
        school: "Đại học Cần Thơ",
        degree: "Kỹ sư Cơ Điện Tử",  
        time: "2018 - 2022"
      }
    ]
  }; 

  // --- PHẦN 2: GIAO DIỆN (FULL MÀN HÌNH) ---
  return (
    // THAY ĐỔI LỚN NHẤT Ở DÒNG DƯỚI: 
    // w-full: Rộng 100%, min-h-screen: Cao full màn hình.
    // Không còn max-w-5xl, không còn rounded, không còn padding ngoài.
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row font-sans">
      
      {/* --- CỘT TRÁI (SIDEBAR) --- */}
      {/* md:h-screen sticky top-0: Giúp cột này đứng yên khi cuộn chuột */}
      <aside className="w-full md:w-1/3 lg:w-1/4 bg-gray-900 text-white p-8 md:h-screen md:sticky md:top-0 overflow-y-auto">
        <div className="flex flex-col items-center md:items-start">
          
          {/* Avatar */}
          <img 
            src={myProfile.avatar} 
            alt="Avatar" 
            className="w-32 h-32 rounded-full border-4 border-blue-500 mb-6 shadow-lg object-cover"
          />
          
          {/* Tên & Chức danh */}
          <h1 className="text-3xl font-bold mb-2 text-center md:text-left">{myProfile.name}</h1>
          <p className="text-blue-400 font-medium mb-8 text-center md:text-left">{myProfile.role}</p>

          {/* Thông tin liên hệ */}
          <div className="w-full space-y-4 mb-10">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4">Liên hệ</h3>
            <p className="text-gray-300 text-sm flex items-center break-all">📧 {myProfile.contact.email}</p>
            <p className="text-gray-300 text-sm flex items-center">📞 {myProfile.contact.phone}</p>
            <p className="text-gray-300 text-sm flex items-center">📍 {myProfile.contact.location}</p>
            <div className="flex gap-4 mt-4">
               <a href="#" className="text-white hover:text-blue-400 underline transition">Linkedin</a>
               <a href="#" className="text-white hover:text-blue-400 underline transition">GitHub</a>
            </div>
          </div>

          {/* Kỹ năng */}
          <div className="w-full">
            <h3 className="text-lg font-semibold border-b border-gray-700 pb-2 mb-4">Kỹ năng</h3>
            <div className="flex flex-wrap gap-2">
              {myProfile.skills.map((skill, index) => (
                <span key={index} className="bg-gray-700 text-gray-200 px-3 py-1 rounded text-sm hover:bg-blue-600 transition cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* --- CỘT PHẢI (NỘI DUNG CHÍNH) --- */}
      {/* flex-1: Lấp đầy toàn bộ khoảng trống còn lại */}
      <main className="flex-1 p-8 md:p-16 bg-gray-50 text-gray-800">
        
        {/* Giới thiệu */}
        <section className="mb-12 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-500 inline-block pb-1 mb-6">Giới thiệu</h2>
          <p className="leading-relaxed text-gray-600 text-lg text-justify">{myProfile.about}</p>
        </section>

        {/* Kinh nghiệm làm việc */}
        <section className="mb-12 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-500 inline-block pb-1 mb-8">Kinh nghiệm làm việc</h2>
          
          <div className="space-y-10">
            {myProfile.experiences.map((exp) => (
              <div key={exp.id} className="relative pl-8 border-l-2 border-gray-300 hover:border-blue-500 transition-colors duration-300">
                {/* Dấu chấm tròn trang trí */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-gray-50"></div>
                
                <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                <p className="text-blue-600 font-semibold mb-3">{exp.company} | {exp.time}</p>
                <p className="text-gray-600 leading-relaxed text-justify">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Học vấn */}
        <section className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-500 inline-block pb-1 mb-8">Học vấn</h2>
          {myProfile.education.map((edu) => (
             <div key={edu.id} className="mb-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800">{edu.school}</h3>
                <p className="text-gray-700 font-medium">{edu.degree}</p>
                <p className="text-gray-500 text-sm italic mt-1">{edu.time}</p>
             </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-gray-200 text-center text-gray-400 text-sm">
          © 2026 {myProfile.name}. 
        </footer>

      </main>
    </div>
  )
}

export default App 