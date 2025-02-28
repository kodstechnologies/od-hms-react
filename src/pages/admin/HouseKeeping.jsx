import React from 'react'

const HouseKeeping = () => {
    return (
        <>
            <Header />
            <Sidebar id="frontoffice" activeClassName="Tokenboard" />
            <div className="page-wrapper">
                <div className="content">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="#">Token Management</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="/token/tokenDetails">Token Details</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <i className="feather-chevron-right">
                                            <FeatherIcon icon="chevron-right" />
                                        </i>
                                    </li>
                                    <li className="breadcrumb-item active">Add Token</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}

                    <div className="row">
                    </div>
                </div>
            </div>
        </>
    )
}

export default HouseKeeping
