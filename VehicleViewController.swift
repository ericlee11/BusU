//
//  VehicleViewController.swift
//  BusU2.0
//
//  Created by Taisei Hashimoto on 2/23/20.
//  Copyright © 2020 Taisei Hashimoto. All rights reserved.
//

import UIKit

class VehicleViewController: UIViewController {
    
    @IBOutlet weak var routeLabel: UILabel!
    @IBOutlet weak var destinationLabel: UILabel!
    
    //Testing
    let centroAPIKey = "u73FxXEpG7AVFvAgK6gHu65xE"
    let command = "getvehicles"
    let route = "SU344"
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        let vehicleService = SUBus(APIKey: centroAPIKey, Command: command)
        vehicleService.getVehicle(rt: route) { (currentVehicle) in
            if let currentVehicle = currentVehicle{
                DispatchQueue.main.async {
                    if let rt = currentVehicle.rt{
                        self.routeLabel.text = "\(rt)"
                    }
                    else{
                        self.routeLabel.text = "-1"
                    }
                }
            }
        }
    }

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
