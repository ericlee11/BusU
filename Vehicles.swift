//
//  Vehicles.swift
//  BusU2.0
//
//  Created by Taisei Hashimoto on 2/25/20.
//  Copyright © 2020 Taisei Hashimoto. All rights reserved.
//

import Foundation

class Vehicles{
    let vehicles: [CurrentVehicle]?
    
    struct VehiclesKey : Codable{
        static let vehicles = "vehicles"
    }
    
    init(vehicleDictionary:[CurrentVehicle]){
        vehicles = vehicleDictionary
    }
}
