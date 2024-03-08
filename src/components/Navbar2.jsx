import React from "react";
import { AvatarSoft } from "./AvatarSoft";
import { ButtonSolid } from "./ButtonSolid";
import { DividerHorizontal } from "./DividerHorizontal";
import { ExamplesTopNav } from "./ExamplesTopNav";
import { LinkPlain } from "./LinkPlain";
import { LocationOnFilled } from "./LocationOnFilled";
import { LogoutFilled } from "./LogoutFilled";
import { MenuFilled } from "./MenuFilled";
import { MoreVertOutlined } from "./MoreVertOutlined";
import { SearchFilled } from "./SearchFilled";
import { SelectOutlined } from "./SelectOutlined";
import { StateEnabledColorWrapper } from "./StateEnabledColorWrapper";
import "./style.css";
export const Screen = () => {
    return (
        <div className="screen">
            <ExamplesTopNav
                className="design-component-instance-node-2"
                iconbuttonPlainIconIcon={<MenuFilled className="icon-2" color="white" />}
                override={<LogoutFilled className="icon-2" color="white" />}
            />
            <div className="container-2">
                <div className="container-3">
                    <div className="text-wrapper-2">Latest Jobs</div>
                    <SelectOutlined
                        color="neutral"
                        error={false}
                        placeholder="latest"
                        selector="image.svg"
                        size="md"
                        state="enabled"
                    />
                </div>
                <DividerHorizontal className="design-component-instance-node-2" divider="divider-2.svg" />
                <div className="content">
                    <div className="container-4">
                        <div className="textfield-outlined">
                            <div className="container-5">
                                <div className="div-2">
                                    <SearchFilled className="icon-instance-node-2" />
                                </div>
                                <div className="placeholder-2">Senior</div>
                            </div>
                        </div>
                        <div className="textfield-outlined">
                            <div className="label">
                                <div className="label-2">Location</div>
                            </div>
                            <div className="container-6">
                                <div className="placeholder-3">19904</div>
                                <div className="div-2">
                                    <LocationOnFilled className="icon-instance-node-2" />
                                </div>
                            </div>
                        </div>
                        <ButtonSolid className="button-solid-instance" color="primary" label="Search" size="sm" state="enabled" />
                        <div className="ul">
                            <div className="text-wrapper-3">Status</div>
                            <div className="div-3">
                                <div className="radio" />
                                <div className="text-wrapper-4">Label</div>
                            </div>
                            <div className="div-3">
                                <div className="radio" />
                                <div className="text-wrapper-4">Open</div>
                            </div>
                            <div className="div-3">
                                <div className="radio" />
                                <div className="text-wrapper-4">Archived</div>
                            </div>
                            <div className="text-wrapper-5">Contract type</div>
                            <div className="div-3">
                                <div className="checkbox" />
                                <div className="text-wrapper-4">Freelance</div>
                            </div>
                            <div className="div-3">
                                <div className="checkbox" />
                                <div className="text-wrapper-4">Full-Time</div>
                            </div>
                            <div className="div-3">
                                <div className="checkbox" />
                                <div className="text-wrapper-4">Internship</div>
                            </div>
                            <div className="div-3">
                                <div className="checkbox" />
                                <div className="text-wrapper-4">Part-time</div>
                            </div>
                            <div className="text-wrapper-5">Level</div>
                            <div className="div-3">
                                <div className="checkbox" />
                                <div className="text-wrapper-4">Any</div>
                            </div>
                            <div className="div-3">
                                <div className="checkbox" />
                                <div className="text-wrapper-4">Director</div>
                            </div>
                            <div className="div-3">
                                <div className="checkbox" />
                                <div className="text-wrapper-4">Entry-Level</div>
                            </div>
                            <div className="div-3">
                                <div className="checkbox" />
                                <div className="text-wrapper-4">Lead</div>
                            </div>
                            <LinkPlain color="primary" state="enabled" />
                        </div>
                    </div>
                    <div className="content-2">
                        <div className="card">
                            <div className="container-7">
                                <div className="container-8">
                                    <div className="container-9">
                                        <AvatarSoft
                                            className="design-component-instance-node-3"
                                            color="primary"
                                            content="text"
                                            size="sm"
                                            text="JG"
                                        />
                                        <div className="text">
                                            <div className="text-wrapper-6">Senior Product Designer</div>
                                            <p className="p">Acme • Atlanta, GA / Remote / San Francisco, CA</p>
                                        </div>
                                    </div>
                                    <StateEnabledColorWrapper
                                        className="design-component-instance-node-3"
                                        color="neutral"
                                        icon={<MoreVertOutlined className="more-vert-outlined" color="#32383E" />}
                                        size="large"
                                        state="enabled"
                                    />
                                </div>
                                <div className="div-wrapper">
                                    <p className="text-wrapper-7">
                                        Exciting news! I’m hiring mid-level and senior Product Designers to join my team at Acme, where
                                        we’re building the future of eCommerce.
                                        <br />
                                        <br />• Own a product area, work cross-platform
                                        <br />• Small, talented, tight-knit team
                                        <br />• SF, ATL or Remote
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="container-10">
                                <div className="container-8">
                                    <div className="container-9">
                                        <AvatarSoft
                                            className="design-component-instance-node-3"
                                            color="primary"
                                            content="text"
                                            size="sm"
                                            text="JG"
                                        />
                                        <div className="text">
                                            <div className="text-wrapper-6">Tech Lead</div>
                                            <p className="p">Acme • London, England / Remote</p>
                                        </div>
                                    </div>
                                    <StateEnabledColorWrapper
                                        className="design-component-instance-node-3"
                                        color="neutral"
                                        icon={<MoreVertOutlined className="more-vert-outlined" color="#32383E" />}
                                        size="large"
                                        state="enabled"
                                    />
                                </div>
                                <div className="div-wrapper">
                                    <p className="text-wrapper-7">
                                        We are looking for an exceptional Tech Lead (React️ + Rust) to bring our development efforts to the
                                        next level
                                        <br />
                                        <br />• London or remote
                                        <br />• Early-stage product
                                        <br />• Massive impact and growth potential
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="container-7">
                                <div className="container-8">
                                    <div className="container-9">
                                        <AvatarSoft
                                            className="design-component-instance-node-3"
                                            color="primary"
                                            content="text"
                                            size="sm"
                                            text="JG"
                                        />
                                        <div className="text">
                                            <p className="text-wrapper-6">Product Marketing Designer / Developer</p>
                                            <p className="p">Acme • London, England / Remote</p>
                                        </div>
                                    </div>
                                    <StateEnabledColorWrapper
                                        className="design-component-instance-node-3"
                                        color="neutral"
                                        icon={<MoreVertOutlined className="more-vert-outlined" color="#32383E" />}
                                        size="large"
                                        state="enabled"
                                    />
                                </div>
                                <div className="div-wrapper">
                                    <p className="text-wrapper-7">
                                        Some exciting news – we’re looking for a Product Marketing Designer to join the team! Love Acme’s
                                        style, working across multiple surfaces, and obsessing over brand identity?
                                        <br />
                                        <br />• London / Remote (EU)
                                        <br />
                                        •️ Early stage product + brand
                                        <br />• Massive impact
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};