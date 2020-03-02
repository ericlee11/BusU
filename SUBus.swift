//
//  SUBus.swift
//  BusU
//
//  Created by Taisei Hashimoto on 2/15/20.
//  Copyright © 2020 Taisei Hashimoto. All rights reserved.
//

import Foundation

class SUBus{
    let centroBusKey: String
    let busBaseURL: URL?
    let getCommand: String
    
    init(APIKey: String,Command: String){
        self.centroBusKey = APIKey
        self.getCommand = Command
        busBaseURL = URL(string:"http://bus-time.centro.org/bustime/api/v3/\(Command)?key=\(APIKey)&format=json")
    }
    
    func getVehicle(rt: String, completion: @escaping (CurrentVehicle?)->Void){
        if let busURL = URL(string: "\(busBaseURL!)&\(rt)"){
            let networkProcessor = NetworkProcessor(url: busURL)
            networkProcessor.downloadJSONFromURL({(jsonDictionary) in
                if let currentVehicleDictionary = jsonDictionary?["bustime-response"] as? [String:Any]{
                    let currentVehicle = CurrentVehicle(busDictionary: currentVehicleDictionary)
                    completion(currentVehicle)
                }
                else{
                    completion(nil)
                }
            })
            //parse jsonDictionary into swift
        }
    }
}
