import Link from "next/link";
import {
    FaGithub,
    FaLinkedinIn,
    FaYoutube,
    FaTwitter,
    FaFacebook,
} from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://github.com/phamtuan162?tab=repositories",
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/tu%E1%BA%A5n-ph%E1%BA%A1m-7613a0313/",
    },
    {
        icon: <FaYoutube />,
        path: "https://www.youtube.com/channel/UCzAJZl6ufm5_bph7h6g9D3w",
    },
    { icon: <FaFacebook />, path: "https://www.facebook.com/pham.tuan.197418" },
];
const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => {
                return (
                    <Link
                        key={index}
                        href={social.path}
                        className={iconStyles}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {social.icon}
                    </Link>
                );
            })}
        </div>
    );
};
export default Social;
