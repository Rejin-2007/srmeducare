import React from "react";
import { FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CurrentCourse = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Courses🎓
          </h2>
            <div className="flex flex-col md:flex-row gap-4 mb-6 p-4">
                {/* PSC Coaching */}
                <div
                    className="relative flex-1 flex justify-center items-center cursor-pointer group"
                    onClick={() => navigate("/courses/psc")}
                >
                    <img
                        src="/psc.jpg"
                        alt="PSC Coaching"
                        className="h-auto w-auto max-w-full border-2 rounded border-[#7B2425]"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 rounded"></div>
                    {/* Text overlay */}
                    <div className="absolute flex items-center gap-2 p-3 rounded bg-[#19183B]/70 text-[#E7E2Ef] border border-[#7B2425] group-hover:bg-[#19183B]/90 transition">
                        <FaChalkboardTeacher size={28} />
                        <span className="font-semibold text-lg">General PSC Coaching</span>
                    </div>
                </div>

                {/* Tuition */}
                <div
                    className="relative flex-1 flex justify-center items-center cursor-pointer group"
                    onClick={() => navigate("/courses/tution")}
                >
                    <img
                        src="/tution.jpg"
                        alt="Tuition"
                        className="h-auto w-auto max-w-full border-2 rounded border-[#7B2425]"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40 rounded"></div>
                    {/* Text overlay */}
                    <div className="absolute flex items-center gap-2 p-3 rounded bg-[#19183B]/70 text-[#E7E2Ef] border border-[#7B2425] group-hover:bg-[#19183B]/90 transition">
                        <FaBook size={28} />
                        <span className="font-semibold text-lg">
                            Tuition from 1-12 (SCERT, NCERT, ICSE)
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentCourse;
