import "styles/aside.scss";
import UserPic from "/images/user-pfp.png";
import TabItem from "./SideBar.Tab";
import data from "src/Data/data.json";
import {useState} from "react";

function Aside() {
    const [activeTab, setActiveTab] = useState(6);
    return (
        <aside className="glob-sidebar">
            <div className="user-det">
                <img width={40} height={40} src={UserPic} alt="User" className="user-pfp" />
                <div className="user-info">
                    <span className="user-name">Nishyan</span>
                    <a href="">Visit store</a>
                </div>
                <button>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M2.84685 7.22185C3.26727 6.80143 3.92516 6.76321 4.38876 7.10719L4.52157 7.22185L10 12.6997L15.4784 7.22185C15.8988 6.80143 16.5567 6.76321 17.0203 7.10719L17.1532 7.22185C17.5736 7.64227 17.6118 8.30016 17.2678 8.76376L17.1532 8.89657L10.8374 15.2124C10.4169 15.6328 9.75905 15.671 9.29545 15.327L9.16264 15.2124L2.84685 8.89657C2.38438 8.43411 2.38438 7.68431 2.84685 7.22185Z"
                            fill="white"
                        />
                    </svg>
                </button>
            </div>
            <ul className="tab-pane" role="tablist">
                {data.map((data) => (
                    <TabItem name={data.name} img={`/images/tab-items/${data.name.toLowerCase()}.svg`} key={data.id} liClass={data.id === activeTab ? "active" : ""} />
                ))}
            </ul>
            <div className="user-credits">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="4" fill="white" fill-opacity="0.1" />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.99995 9.79739C8.42319 9.79739 7.79995 10.3554 7.79995 11.2474V24.7474C7.79995 25.6394 8.42319 26.1974 8.99995 26.1974H27C27.5767 26.1974 28.2 25.6394 28.2 24.7474V21.8474H23C20.8737 21.8474 19.15 20.1237 19.15 17.9974C19.15 15.8711 20.8737 14.1474 23 14.1474H28.2V11.2474C28.2 10.3554 27.5767 9.79739 27 9.79739H8.99995ZM29.7999 14.1474V11.2474C29.7999 9.6541 28.6323 8.19739 27 8.19739H8.99995C7.36758 8.19739 6.19995 9.6541 6.19995 11.2474V24.7474C6.19995 26.3407 7.36758 27.7974 8.99995 27.7974H27C28.6323 27.7974 29.7999 26.3407 29.7999 24.7474V21.8474H29.85V14.1474H29.7999ZM22 17.9474C22 17.4779 22.3806 17.0974 22.85 17.0974H24.15C24.6194 17.0974 25 17.4779 25 17.9474C25 18.4168 24.6194 18.7974 24.15 18.7974H22.85C22.3806 18.7974 22 18.4168 22 17.9474ZM20.85 17.9974C20.85 16.81 21.8126 15.8474 23 15.8474H28.15V20.1474H23C21.8126 20.1474 20.85 19.1848 20.85 17.9974Z"
                        fill="white"
                    />
                </svg>
                <div className="credits-info">
                    <p className="info-head">Available credits</p>
                    <span>222.10</span>
                </div>
            </div>
        </aside>
    );
}

export default Aside;
