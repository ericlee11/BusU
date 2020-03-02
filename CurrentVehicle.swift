//
//  CurrentBus.swift
//  BusU
//
//  Created by Taisei Hashimoto on 2/18/20.
//  Copyright © 2020 Taisei Hashimoto. All rights reserved.
//

import Foundation

class CurrentVehicle{
    let vid: String?
    let tmstp: String?
    let lat: Double?
    let lon: Double?
    let rt: String?
    let des: String?
    let dly: Bool?
    
    struct VehicleKeys : Codable{
        static let vid = "vid"
        static let tmstp = "tmstp"
        static let lat = "lat"
        static let lon = "lon"
        static let rt = "rt"
        static let des = "des"
        static let dly = "dly"
    }
    
    init(busDictionary:[String:Any]){
        vid = busDictionary[VehicleKeys.vid] as? String
        tmstp = busDictionary[VehicleKeys.tmstp] as? String
        lat = busDictionary[VehicleKeys.lat] as? Double
        lon = busDictionary[VehicleKeys.lon] as? Double
        rt = busDictionary[VehicleKeys.rt] as? String
        des = busDictionary[VehicleKeys.des] as? String
        dly = busDictionary[VehicleKeys.dly] as? Bool
    }
    /*
     "vid": "1234",
     "tmstmp": "20200218 14:28",
     "lat": "43.01081085205078",
     "lon": "-76.11568790011935",
     "hdg": "74",
     "pid": 773,
     "rt": "SU344",
     "des": "344 South Campus - Skytop",
     "pdist": 17034,
     "dly": false,
     "spd": 3,
     "tatripid": "1197984",
     "tablockid": "12411 SY",
     "zone": "",
     "mode": 1,
     "psgld": "N/A"
     */
}
