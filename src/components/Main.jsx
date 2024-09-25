import TableRow from "./Main.TableRow";
import "styles/main.scss";

function Main() {
    return (
        <main>
            <div className="meta-data">
                <div className="meta-head">
                    <h2 className="head">Overview</h2>
                    <details>
                        <summary>
                            Last Month
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.27748 5.77748C2.61381 5.44114 3.14013 5.41057 3.511 5.68575L3.61726 5.77748L8 10.1598L12.3827 5.77748C12.7191 5.44114 13.2454 5.41057 13.6163 5.68575L13.7225 5.77748C14.0589 6.11381 14.0894 6.64013 13.8142 7.011L13.7225 7.11726L8.66989 12.1699C8.33355 12.5062 7.80724 12.5368 7.43636 12.2616L7.33011 12.1699L2.27748 7.11726C1.90751 6.74729 1.90751 6.14745 2.27748 5.77748Z"
                                    fill="#4D4D4D"
                                />
                            </svg>
                        </summary>
                    </details>
                </div>
                <div className="meta-data-overview">
                    <div className="overview-bar">
                        <p className="bar-head">Online orders</p>
                        <span className="bar-value">231</span>
                    </div>
                    <div className="overview-bar">
                        <p className="bar-head">Amount received</p>
                        <span className="bar-value">₹23,92,312.19</span>
                    </div>
                </div>
            </div>
            <div className="data-table">
                <div className="meta-head">
                    <h2 className="head">Transactions | This Month</h2>
                </div>
                <div className="table-ft-wrapper">
                    <div className="table-ft">
                        <search>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <label htmlFor="t-search">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_1451)">
                                            <path
                                                d="M5.95 10.5263C3.4412 10.5263 1.4 8.48 1.4 5.96491C1.4 3.44982 3.4412 1.40351 5.95 1.40351C8.4588 1.40351 10.5 3.44982 10.5 5.96491C10.5 8.48 8.4588 10.5263 5.95 10.5263ZM10.7443 9.48281C11.4674 8.49474 11.9 7.2814 11.9 5.96491C11.9 2.67579 9.2309 0 5.95 0C2.6691 0 0 2.67579 0 5.96491C0 9.25404 2.6691 11.9298 5.95 11.9298C7.4137 11.9298 8.7542 11.3944 9.7909 10.5116L12.2528 12.9796C12.3893 13.1165 12.5685 13.1853 12.7477 13.1853C12.9269 13.1853 13.1061 13.1165 13.2426 12.9796C13.5163 12.7053 13.5163 12.2618 13.2426 11.9874L10.7443 9.48281Z"
                                                fill="#999999"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_1451">
                                                <rect width="14" height="14" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </label>
                                <input type="search" name="Table Search" id="t-search" placeholder="Search by order ID..." />
                            </form>
                        </search>
                        <div className="btns">
                            <button id="sortCta">
                                Sort
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.62288 9.93365C1.83116 9.72537 2.16885 9.72537 2.37713 9.93365L4.64088 12.1974L6.90462 9.93365C7.1129 9.72537 7.45059 9.72537 7.65887 9.93365C7.86715 10.1419 7.86715 10.4796 7.65887 10.6879L5.018 13.3288C4.80972 13.537 4.47203 13.537 4.26375 13.3288L1.62288 10.6879C1.4146 10.4796 1.4146 10.1419 1.62288 9.93365Z"
                                        fill="#4D4D4D"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4.64083 2.51505C4.93538 2.51505 5.17416 2.75383 5.17416 3.04838L5.17416 12.9516C5.17416 13.2462 4.93538 13.485 4.64083 13.485C4.34628 13.485 4.1075 13.2462 4.1075 12.9516L4.1075 3.04838C4.1075 2.75383 4.34628 2.51505 4.64083 2.51505Z"
                                        fill="#4D4D4D"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M14.3771 6.06635C14.1688 6.27463 13.8311 6.27463 13.6229 6.06635L11.3591 3.80261L9.09538 6.06635C8.8871 6.27463 8.54941 6.27463 8.34113 6.06635C8.13285 5.85807 8.13285 5.52039 8.34113 5.31211L10.982 2.67124C11.1903 2.46296 11.528 2.46296 11.7362 2.67124L14.3771 5.31211C14.5854 5.52039 14.5854 5.85807 14.3771 6.06635Z"
                                        fill="#4D4D4D"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.3592 13.485C11.0646 13.485 10.8258 13.2462 10.8258 12.9516L10.8258 3.04837C10.8258 2.75382 11.0646 2.51503 11.3592 2.51503C11.6537 2.51503 11.8925 2.75382 11.8925 3.04837L11.8925 12.9516C11.8925 13.2462 11.6537 13.485 11.3592 13.485Z"
                                        fill="#4D4D4D"
                                    />
                                </svg>
                            </button>
                            <button id="downloadCta">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z"
                                        fill="#4D4D4D"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <table>
                        <thead className="table-header">
                            <div id="orderID" className="column-head ch-left">
                                Order ID
                            </div>
                            <div id="orderDate" className="column-head ch-left">
                                Order date
                            </div>
                            <div id="orderAmount" className="column-head ch-right">
                                Order amount
                            </div>
                            <div id="transactionFees" className="column-head ch-right">
                                Transaction fees
                            </div>
                        </thead>
                        <tbody className="table-body">
                            {Array.from({length: 20}, (_, i) => i + 1).map((num) => <TableRow key={num}/>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default Main;
