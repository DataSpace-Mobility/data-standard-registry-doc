import React from 'react';
import Highlight from 'react-highlight.js';

import GraphView from './GraphView';
import DocTable from './DocTable';

import 'highlight.js/styles/dracula.css'

function DocMainContent(props) {

    var content = `// MIT License

// Copyright (c) 2020 The Ministry of Housing and Urban Affairs

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// v0.0.3

syntax = "proto3";
package ev_charging_static;
option java_package = "in.gov.mohua.ds.transit";

import "Header.proto";
import "OperatingSchedule.proto";
import "AcceptedModeOfPayment.proto";
import "Location.proto";
import "VehicleType.proto";

message FeedMessage {
    // Metadata
    Header header = 1;

    // Information about the specific EV charging station. 
    repeated Station stations = 2;
}

message Station {
    message Info {
        // Name of the specific EV charging station.
        string name = 1;
        // Address of the specific EV charging station.
        string address = 2;
        // Image of the specific EV charging station (if any).
        string image = 3;
        // Name of the operator of the specific EV charging station.
        string operator = 4;
        // Name of the owner of the specific EV charging station.
        string owner = 5;
        // Mode(s) of payment accepted at the specific EV charging station.
        AcceptedModeOfPayment acceptedModeOfPayment = 6;
    }

    message VehicleCapacity {
        // Type of the vehicle.
        VehicleType vehicleType = 1;
        // Vehicle capacity count.
        uint32 count = 2;
    }

    message Tariff {
        float baseUnitPrice = 1;
        float surcharge = 2;
        float subsidy = 3;
        float unitPrice = 4;
    }

    // Uniique identifier for a charging station.
    string id  = 1;
    // General information about the specific EV charging station. 
    Info info = 2;
    // Information about the total vehicle capacity by type supported at the 
    // specific EV charging station.
    repeated VehicleCapacity vehicleCapacity = 3;
    // Location of the specific EV charging station.
    Location location = 4;
    // Operating schedule of the specific EV charging station.
    OperatingSchedule operatingSchedule = 5;
    // Status of operation of the specific EV charging station.
    Status status = 6;
    // Typology of vehicles allowed at the specific EV charging station.
    repeated VehicleType allowedVehicleType = 7;
    // Information about the specific charging unit. 
    repeated ChargingUnit chargingUnits = 8;
    // Information about the specific battery swapping unit. 
    repeated SwappingUnit swappingUnits = 9;
}

enum Status {
    // The status of operation for the specific EV charging station is unknown.
    STATUS_UNKNOWN = 0;
    // The specific EV charging station is operating. 
    STATUS_IN_OPERATION = 1;
    // The specific EV charging station is not operating thus out of service.
    STATUS_OUT_OF_SERVICE = 2;
}

message ChargingUnit {
    enum Type {
        // The typology of the specific charging unit is not known / specified. 
        CHARGING_UNIT_TYPE_UNKNOWN = 0;
        // The specific charging unit charges the EVs via a wire. 
        CHARGING_UNIT_TYPE_WIRED = 1;
        // The specific charging unit charges the EVs without the need of a wire.
        CHARGING_UNIT_TYPE_WIRELESS = 2;
        // // The specific charging unit charges the EVs both with wires and wireless.
        CHARGING_UNIT_TYPE_WIRED_WIRELESS = 3;
    }

    message Socket {
        enum Type {
            // The specific socket is not known / specified. 
            CHARGING_UNIT_SOCKET_TYPE_UNKNOWN = 0;

            CHARGING_UNIT_SOCKET_TYPE_BEVC_AC001 = 1;

            CHARGING_UNIT_SOCKET_TYPE_BEVC_DC001 = 2;
            // The specific socket is TYPE2.
            CHARGING_UNIT_SOCKET_TYPE_TYPE2 = 3;
            CHARGING_UNIT_SOCKET_TYPE_TYPE3 = 4;
            CHARGING_UNIT_SOCKET_TYPE_CHADEMO = 5;
            CHARGING_UNIT_SOCKET_TYPE_CCS_SAE = 6;
            CHARGING_UNIT_SOCKET_TYPE_CCS1 = 7;
            CHARGING_UNIT_SOCKET_TYPE_CCS2 = 8;
            CHARGING_UNIT_SOCKET_TYPE_TESLA = 9;
            CHARGING_UNIT_SOCKET_TYPE_J_1772 = 10;
            CHARGING_UNIT_SOCKET_TYPE_WALL_EURO = 11;
            CHARGING_UNIT_SOCKET_TYPE_CARAVAN_MAINS_SOCKET = 12;
            CHARGING_UNIT_SOCKET_TYPE_DUAL_J_1772 = 13;
            CHARGING_UNIT_SOCKET_TYPE_DUAL_CHADEMO = 14;
            CHARGING_UNIT_SOCKET_TYPE_MENNEKES = 15;
            CHARGING_UNIT_SOCKET_TYPE_DUAL_MENNEKES = 16;
            CHARGING_UNIT_SOCKET_TYPE_GB_T = 17;
            CHARGING_UNIT_SOCKET_TYPE_OTHER = 18;
        }

        // Unique identifier of charging socket or gun.
        string id = 1;
        // Typology of the specific socket. 
        Type type = 2;
    }

    message WirelessPod {
        enum Type {
            // The specific wireless pod is a Capacitive Wireless Charging System (CWCS).
            WIRELESS_POD_TYPE_CWCS = 0;
            // The specific wireless pod is a Permanent Magnetic Gear Wireless Charging System (PMWC).
            WIRELESS_POD_TYPE_PMWC = 1;
            // The specific wireless pod is a Inductive Wireless Charging System (IWC).
            WIRELESS_POD_TYPE_IWC = 2;
            // The specific wireless pod is a Resonant Inductive Wireless Charging System (RIWC)
            WIRELESS_POD_TYPE_RIWC = 3;
        }

        // Unique identification number assigned to each wireless pod. 
        string id = 1;
        // Area (in sq m) assigned to each wireless pod. 
        float area = 2;
        // Typology of the specific wireless pod. 
        Type type = 3;
    }

    // Unique identification number assigned to each charging unit.
    string id = 1;
    // Typology of the specific charging unit. 
    Type type = 2;
    // Information about the specific EV charging socket. 
    repeated Socket sockets = 3;
    // Information about the specific EV charging wireless pod. 
    repeated WirelessPod wirelessPods = 4;
    // Status of operation of the specific charging unit. 
    Status status = 5;
}

message SwappingUnit {
    message Pod {
        enum BatteryType {
            // The specific swapping pod supports Lithium-i on Iron Phosphate (LFP) batteries. 
            SWAPPING_POD_BATTERY_TYPE_LFP = 0;
            // The specific swapping pod supports Lithium-i on Nickel Cobalt Aluminum (NCA) batteries. 
            SWAPPING_POD_BATTERY_TYPE_NCA = 1;
            // The specific swapping pod supports Lithium-i on Nickel Cobalt Manganese (NMC) batteries. 
            SWAPPING_POD_BATTERY_TYPE_NMC = 2;
            // The specific swapping pod supports Lithium-i on Titanium Oxide (LTO) batteries. 
            SWAPPING_POD_BATTERY_TYPE_LTO = 3;
            // The specific swapping pod supports Sodium Nickel Chloride (Zebra) batteries. 
            SWAPPING_POD_BATTERY_TYPE_ZEBRA = 4;
            // The specific swapping pod supports Nickel-Metal Hydride (NiMH) batteries. 
            SWAPPING_POD_BATTERY_TYPE_NIMH = 5;
            // The specific swapping pod supports Flooded Lead-Acid batteries. 
            SWAPPING_POD_BATTERY_TYPE_FLOODED_LEAD_ACID = 6;
            // The specific swapping pod supports Ultracapacitors.
            SWAPPING_POD_BATTERY_TYPE_ULTRA_CAPACITORS = 7;
        }

        // Unique identification number assigned to each swapping pod.
        string id = 1;
        // Typology of the specific baterry supported by the specific swapping unit. 
        BatteryType batteryType = 2;
    }

    // Unique identification number assigned to each swapping unit.
    string id = 1;
    // Information about the specific EV charging pod at a battery swapping unit. 
    repeated Pod pods = 2;
    // Status of operation of the specific battery swapping unit. 
    Status status = 3;
}
`
    var jsonContent = `{
    "header": {
        "version": "3.0.1",
        "incrementality": "DIFFERENTIAL",
        "timestamp": 1602673612,
        "provider": {
            "id": "9153b228-7cc8-4765-9143-605dc2dd3f6f",
            "name": "Ministry of Housing and Urban Affairs"
        }
    },
    "stations": [
        {
            "id": "a63f5658-8226-453f-b6e3-a7a3071d66e0",
            "info": {
                "name": "EV Plugin Charging Station",
                "address": "2nd Floor, 39, Shahpur Jat, New Delhi, Delhi 110049",
                "image": "https://lh5.googleusercontent.com/p/AF1QipMGIuzqbhru8ramxdoD8qWBG6HTK8MVdiv4zOPh=w648-h240-k-no",
                "operator": "EESL",
                "owner": "ESL",
                "acceptedModeOfPayment": "PAYMENT_BANK_CARD"
            },
            "vehicleCapacity": [
                {
                    "vehicleType": {
                        "vehicleType": "VEHICLE_TYPE_BICYCLE",
                        "count": 0
                    },
                    "count": 0
                }
            ],
            "location": {
                "latitude": 62.300032,
                "longitude": 24.3782467
            },
            "operatingSchedule": {
                "opening": "08:00:00",
                "closing": "22:00:00",
                "dayOfWeek": ["DAY_SUNDAY", "DAY_MONDAY", "DAY_TUESDAY", "DAY_WEDNESDAY", "DAY_THURSDAY", "DAY_FRIDAY", "DAY_SATURDAY"]
            },
            "status": "STATUS_IN_OPERATION",
            "vehicleType": ["VEHICLE_TYPE_CAR", "VEHICLE_TYPE_MOTORCYCLE"],
            "chargingUnits": [
                {
                    "id": "542206ba-cad9-41fc-9671-aa281e3d66c7",
                    "type": "CHARGING_UNIT_TYPE_WIRED_WIRELESS",
                    "sockets": [
                        {
                            "id": "61a1ce7a-b10e-435d-a793-141e5d0762f6",
                            "type": "CHARGING_UNIT_SOCKET_TYPE_BEVC_DC001"
                        },
                        {
                            "id": "29db318b-0285-4054-96b7-a643bbc27a5f",
                            "type": "CHARGING_UNIT_SOCKET_TYPE_TESLA"
                        }
                    ],
                    "wirelessPods": [
                        {
                            "id": "2deb3ce0-8a9c-4c8e-84a2-f955954e5685",
                            "area": 9.8,
                            "Type": "WIRELESS_POD_TYPE_CWCS"
                        }
                    ],
                    "status": "STATUS_IN_OPERATION"
                }
            ],
            "swappingUnits": [
                {
                    "id": "cbef9381-572d-4ce2-b6e1-84613e123881",
                    "pods": [
                        {
                            "id": "3bfa3ce6-6be8-4248-b9a7-e327a762376b",
                            "batteryType": "SWAPPING_POD_BATTERY_TYPE_NCA"
                        }
                    ],
                    "status": "STATUS_IN_OPERATION"
                }
            ]
        }
    ]
}`

    return (
        <section className="DocMainContent">
            <div className="nav-path">Data Standards > Transit > EV Charging</div>
            <div className="standard-description">
                <h1>Electric Vehicle Charging Infrastructure</h1>
                <h5>
                    Electric Vehicle Charging Infrastructure defines a common format for creation of datasets related to charging stations and any other related infrastructure. This data standard facilitates data sharing for both, EV users and charging facility operators.
                </h5>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="doc-tab" data-toggle="tab" href="#doc" role="tab" aria-controls="doc" aria-selected="true">Documentation</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="graph-tab" data-toggle="tab" href="#graph" role="tab" aria-controls="graph" aria-selected="false">Graph Visualisation</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="sample-tab" data-toggle="tab" href="#sample" role="tab" aria-controls="sample" aria-selected="false">Sample Dataset</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="proto-tab" data-toggle="tab" href="#proto" role="tab" aria-controls="proto" aria-selected="false">Protobuf</a>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="doc" role="tabpanel" aria-labelledby="doc-tab">
                    <DocTable standardFileJSONArr={props.StandardJSON.files}/>
                </div>
                <div className="tab-pane fade" id="graph" role="tabpanel" aria-labelledby="graph-tab">
                    <GraphView StandardJSON={props.StandardJSON}/>
                </div>
                <div className="tab-pane fade" id="sample" role="tabpanel" aria-labelledby="sample-tab">
                    <Highlight language="json">
                        {jsonContent}
                    </Highlight>
                </div>
                <div className="tab-pane fade" id="proto" role="tabpanel" aria-labelledby="proto-tab">
                    <Highlight language="proto">
                        {content}
                    </Highlight>
                </div>
            </div> 
        </section> 
    );
}

export default DocMainContent;