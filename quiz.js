// Question data (questions, choices, and correct answers)
const questions = [
    {
        question: "Regulations which refer to 'commercial operators' relate to the person who:",
        choices: [
            { text: "For compensation or hire, engages in the carriage by aircraft in air commerce of persons or property, other than as an air carrier.", correct: true },
            { text: "Owns an aircraft and offers flights for private hire.", correct: false },
            { text: "Operates an aircraft for recreational purposes.", correct: false }
        ]
    },
 {
                question: "Regulations which refer to the 'operational control' of a flight are in relation to:",
                choices: [
                    { text: "Exercising authority over initiating, conducting, or terminating a flight.", correct: true },
                    { text: "Monitoring the fuel and weight distribution during the flight.", correct: false },
                    { text: "Providing emergency services to the flight crew.", correct: false }
                ]
            },
            {
                question: " an emergency situation, which endangers the safety of the aircraft or persons, necessitates the taking of action, which involves a violation of regulations or procedures by any crewmember, the pilot - in - command shall submit a report on any such violation to the CAAP within:",
                choices: [
                    { text: "10 days", correct: true },
                    { text: "7 days", correct: false },
                    { text: "2 days", correct: false }
                ]
            },
            {
                question: "Which statement is true regarding right of way for taxiing aircraft in the manuevering area of an aerodrome for one aircraft overtaking the other?",
                choices: [
                    { text: "An aircraft which is being overtaken by another aircraft has the right of way", correct: true },
                    { text: "The overtaking aircraft has the right of way.", correct: false },
                    { text: "Aircraft with higher takeoff weight has the right of way.", correct: false }
                ]
            },
            {
                question: "The primary purpose of filing a plan is for:",
                choices: [
                    { text: "search and rescue.", correct: true },
                    { text: "safety of flight.", correct: false },
                    { text: "to secure clearance from ATS.", correct: false }
                ]
            },
            {
                question: "If not equipped with required position lights, an aircraft must terminate flight...",
                choices: [
                    { text: "at sunset", correct: true },
                    { text: "1 hour after sunset.", correct: false },
                    { text: "30 minutes after sunset.", correct: false }
                ]
            },
            {
                question: "______ of cross country flight time as pilot - in - command including one flight of not less than 300 nautical miles in the course of which not less than three full stop landings at different point shall have been made",
                choices: [
                    { text: "Thirty hours", correct: true },
                    { text: "Fifteen hours", correct: false },
                    { text: "Ten hours", correct: false }
                ]
            },
            {
                question: "Who among the following persons is required by CAAP to file a flight plan?",
                choices: [
                    { text: "Pilot in command", correct: true },
                    { text: "Aircraft mechanic", correct: false },
                    { text: "Aircraft owner.", correct: false }
                ]
            },
            {
                question: "fter an ATC clearance has been obtained, a pilot may not deviate from that clearance, unless the pilot...",
                choices: [
                    { text: "receives an amended clearance or less an emergency", correct: true },
                    { text: "requests an amended clearance.", correct: false },
                    { text: "is operating VFR on top", correct: false }
                ]
            },
            {
                question: "Aerial photography is prohibited in the Philippines without proper authorization from...",
                choices: [
                    { text: "CAAP", correct: true },
                    { text: "NAMRIA", correct: false },
                    { text: "Philippine Air Force", correct: false }
                ]
            },
            {
                question: "ll flights of civil aircraft over the Manila Flight Information Region and landing at Philippine aerodrome shall be carried out in accordance with.....",
                choices: [
                    { text: "the current regulations and policies.", correct: true },
                    { text: "at the discretion of the civil aircraft operator.", correct: false },
                    { text: "policy procedures of the civil aircraft operator", correct: false }
                ]
            },
            {
                question: "If weather conditions are such that it requires designating an alternate airport on your IFR flight plan, you should plan to carry enough fuel to arrive at the first airport of intended landing, fly from that airport to the alternate airport, fly thereafter.",
                choices: [
                    { text: "45 minutes at normal cruising speed.", correct: true },
                    { text: "1 hour at normal cruising speed.", correct: false },
                    { text: "30 minutes at slow cruising speed.", correct: false }
                ]
            },
            {
                question: "Regulations which refer to 'operate' relate to the person who:",
                choices: [
                    { text: "Causes the aircraft to be used or authorizes its use.", correct: true },
                    { text: "Has ownership of the aircraft.", correct: false },
                    { text: "Is the operator responsible for the airworthiness of the aircraft.", correct: false }
                ]
            },
            {
                question: "Which is the correct symbol for the stalling speed or minimum steady flight speed in a specified configuration?",
                choices: [
                    { text: "VS1", correct: true },
                    { text: "VNO", correct: false },
                    { text: "VFE", correct: false }
                ]
            },
            {
                question: "Which is the correct symbol for the stalling speed or the minimum steady flight speed at which the airplane is controllable?",
                choices: [
                    { text: "VS", correct: true },
                    { text: "VNE", correct: false },
                    { text: "VX", correct: false }
                ]
            },
             {
        question: "Regulations which refer to 'commercial operators' relate to the person who:",
        choices: [
            { text: "For compensation or hire, engages in the carriage by aircraft in air commerce of persons or property, other than as an air carrier.", correct: true },
            { text: "Owns an aircraft and offers flights for private hire.", correct: false },
            { text: "Operates an aircraft for recreational purposes.", correct: false }
        ]
    },
    {
        question: "Regulations which refer to the 'operational control' of a flight are in relation to:",
        choices: [
            { text: "Exercising authority over initiating, conducting, or terminating a flight.", correct: true },
            { text: "Monitoring the fuel and weight distribution during the flight.", correct: false },
            { text: "Providing emergency services to the flight crew.", correct: false }
        ]
    },
    {
        question: "Regulations which refer to 'operate' relate to the person who:",
        choices: [
            { text: "Causes the aircraft to be used or authorizes its use.", correct: true },
            { text: "Has ownership of the aircraft.", correct: false },
            { text: "Is the operator responsible for the airworthiness of the aircraft.", correct: false }
        ]
    },
    {
        question: "Which is the correct symbol for the stalling speed or minimum steady flight speed in a specified configuration?",
        choices: [
            { text: "VS1", correct: true },
            { text: "VNO", correct: false },
            { text: "VFE", correct: false }
        ]
    },
    {
        question: "Which is the correct symbol for the stalling speed or the minimum steady flight speed at which the airplane is controllable?",
        choices: [
            { text: "VS", correct: true },
            { text: "VNE", correct: false },
            { text: "VX", correct: false }
        ]
    },
    {
        question: "14 CFR Part 1 defines VF as:",
        choices: [
            { text: "Design flap speed", correct: true },
            { text: "Maximum flap extended speed", correct: false },
            { text: "Minimum approach speed", correct: false }
        ]
    },
    {
        question: "14 CFR Part 1 defines VNO as:",
        choices: [
            { text: "Maximum structural cruising speed", correct: true },
            { text: "Never-exceed speed", correct: false },
            { text: "Speed for maximum rate of climb", correct: false }
        ]
    },
    {
        question: "14 CFR Part 1 defines VLE as:",
        choices: [
            { text: "Maximum landing gear extended speed", correct: true },
            { text: "Minimum operating speed", correct: false },
            { text: "Maximum operational speed", correct: false }
        ]
    },
    {
        question: "14 CFR Part 1 defines VNE as:",
        choices: [
            { text: "Never-exceed speed", correct: true },
            { text: "Maximum flaps extended speed", correct: false },
            { text: "Maximum lift-off speed", correct: false }
        ]
    },
    {
        question: "14 CFR Part 1 defines Vy as:",
        choices: [
            { text: "Speed for best RATE of climb", correct: true },
            { text: "Speed for best angle of climb", correct: false },
            { text: "Speed for minimum drag", correct: false }
        ]
    },
    {
        question: "Regulations which refer to 'commercial operators' relate to the person who:",
        choices: [
            { text: "For compensation or hire, engages in the carriage by aircraft in air commerce of persons or property, other than as an air carrier.", correct: true },
            { text: "Owns an aircraft and offers flights for private hire.", correct: false },
            { text: "Operates an aircraft for recreational purposes.", correct: false }
        ]
    },
    {
        question: "Regulations which refer to the 'operational control' of a flight are in relation to:",
        choices: [
            { text: "Exercising authority over initiating, conducting, or terminating a flight.", correct: true },
            { text: "Monitoring the fuel and weight distribution during the flight.", correct: false },
            { text: "Providing emergency services to the flight crew.", correct: false }
        ]
    },
    {
        question: "Regulations which refer to 'operate' relate to the person who:",
        choices: [
            { text: "Causes the aircraft to be used or authorizes its use.", correct: true },
            { text: "Has ownership of the aircraft.", correct: false },
            { text: "Is the operator responsible for the airworthiness of the aircraft.", correct: false }
        ]
    },
    {
        question: "Which is the correct symbol for the stalling speed or minimum steady flight speed in a specified configuration?",
        choices: [
            { text: "VS1", correct: true },
            { text: "VNO", correct: false },
            { text: "VFE", correct: false }
        ]
    },
    {
        question: "Which is the correct symbol for the stalling speed or the minimum steady flight speed at which the airplane is controllable?",
        choices: [
            { text: "VS", correct: true },
            { text: "VNE", correct: false },
            { text: "VX", correct: false }
        ]
    },
    {
        question: "14 CFR Part 1 defines VF as:",
        choices: [
            { text: "Design flap speed", correct: true },
            { text: "Maximum flap extended speed", correct: false },
            { text: "Minimum approach speed", correct: false }
        ]
    },
    {
        question: "14 CFR Part 1 defines VNO as:",
        choices: [
            { text: "Maximum structural cruising speed", correct: true },
            { text: "Never-exceed speed", correct: false },
            { text: "Speed for maximum rate of climb", correct: false }
        ]
    },
    {
        question: "14 CFR Part 1 defines VLE as:",
        choices: [
            { text: "Maximum landing gear extended speed", correct: true },
            { text: "Minimum operating speed", correct: false },
            { text: "Maximum operational speed", correct: false }
        ]
    },
    {
        question: "14 CFR Part 1 defines VNE as:",
        choices: [
            { text: "Never-exceed speed", correct: true },
            { text: "Maximum flaps extended speed", correct: false },
            { text: "Maximum lift-off speed", correct: false }
        ]
    },
    {
        question: "14 CFR Part 1 defines Vy as:",
        choices: [
            { text: "Speed for best RATE of climb", correct: true },
            { text: "Speed for best angle of climb", correct: false },
            { text: "Speed for minimum drag", correct: false }
        ]
    },
    {
        question: "14 CFR Part 1 defines VNO as:",
        choices: [
            { text: "Maximum structural cruising speed", correct: true },
            { text: "Never-exceed speed", correct: false },
            { text: "Minimum safe speed for maneuvering", correct: false }
        ]
    },
    {
        question: "If an airplane category is listed as utility, it would mean that this airplane could be operated in which of the following maneuvers?",
        choices: [
            { text: "Limited acrobatics, including spins (if approved)", correct: true },
            { text: "Full aerobatics with no restrictions", correct: false },
            { text: "Only general aviation maneuvers, no spins allowed", correct: false }
        ]
    },
    {
        question: "Commercial pilots are required to have a valid and appropriate pilot certificate in their physical possession or readily accessible in the aircraft when:",
        choices: [
            { text: "Acting as pilot in command", correct: true },
            { text: "Flying outside of U.S. airspace", correct: false },
            { text: "Flying an aircraft that requires a type rating", correct: false }
        ]
    },
    {
        question: "Which of the following are considered aircraft class ratings?",
        choices: [
            { text: "Single-engine land, multiengine land, single-engine sea, and multi-engine sea", correct: true },
            { text: "Single-engine, multi-engine, and rotorcraft", correct: false },
            { text: "Commercial, private, and student ratings", correct: false }
        ]
    },
    {
        question: "A pilot convicted of operating a motor vehicle while either intoxicated by, impaired by, or under the influence of alcohol or a drug is required to provide a:",
        choices: [
            { text: "Written report to the FAA Civil Aviation Security Division (AMC-700) not later than 60 days after the conviction", correct: true },
            { text: "Notification to the NTSB within 48 hours of the conviction", correct: false },
            { text: "Notice to the FAA upon request", correct: false }
        ]
    },
    {
        question: "A pilot convicted of a motor vehicle offense involving alcohol or drugs is required to provide a written report to the:",
        choices: [
            { text: "AMC-700 within 60 days after such action", correct: true },
            { text: "FAA immediately after the conviction", correct: false },
            { text: "NTSB if the conviction affects flight privileges", correct: false }
        ]
    },
    {
        question: "A pilot convicted for the violation of any Federal or State statute relating to the process, manufacture, transportation, distribution, or sale of narcotic drugs is grounds for:",
        choices: [
            { text: "Suspension or revocation of any certificate, rating, or authorization issued under 14 CFR part 61", correct: true },
            { text: "A probation period before further flight privileges are granted", correct: false },
            { text: "A temporary suspension of flight privileges for 6 months", correct: false }
        ]
    },
    {
        question: "A pilot convicted of operating an aircraft as a crew member under the influence of alcohol, or using drugs that affect the person’s faculties, is grounds for:",
        choices: [
            { text: "Denial of an application for an FAA certificate, rating, or authorization issued under 14 CFR part 61", correct: true },
            { text: "A 6-month suspension of their medical certificate", correct: false },
            { text: "A warning issued by the FAA with no further action", correct: false }
        ]
    },
    {
        question: "Does a commercial pilot certificate have a specific expiration date?",
        choices: [
            { text: "No, it is issued without an expiration date", correct: true },
            { text: "Yes, it must be renewed every 2 years", correct: false },
            { text: "Yes, it expires after 5 years from issuance", correct: false }
        ]
    },
    {
        question: "A second-class medical certificate issued to a commercial pilot on April 10, this year, permits the pilot to exercise which of the following privileges?",
        choices: [
            { text: "Commercial pilot privileges through April 30, next year", correct: true },
            { text: "Commercial pilot privileges only until the end of this year", correct: false },
            { text: "No privileges unless renewed every 6 months", correct: false }
        ]
    },
    {
        question: "When is the pilot in command required to hold a category and class rating appropriate to the aircraft being flown?",
        choices: [
            { text: "On flight when carrying another person", correct: true },
            { text: "On flights over 25 nautical miles", correct: false },
            { text: "On flights at night only", correct: false }
        ]
    },
    {
        question: "Unless otherwise authorized, the pilot in command is required to hold a type rating when operating any:",
        choices: [
            { text: "Aircraft of more than 12,500 pounds maximum certificated takeoff weight", correct: true },
            { text: "Aircraft certified for IFR operations only", correct: false },
            { text: "Aircraft equipped with more than one engine", correct: false }
        ]
    },
    {
        question: "To act as PIC of an airplane that is equipped with retractable landing gear, flaps, and controllable pitch propeller, a person is required to:",
        choices: [
            { text: "Receive and log ground and flight training in such an airplane, obtain a logbook endorsement certifying proficiency", correct: true },
            { text: "Have 10 hours of flight experience in similar airplanes", correct: false },
            { text: "Hold a commercial pilot certificate", correct: false }
        ]
    },
    {
        question: "To act as PIC of an airplane with more than 200 hp, a person is required to:",
        choices: [
            { text: "Receive and log ground and flight training from an authorized instructor in such an airplane", correct: true },
            { text: "Have at least 50 hours of flight experience in high-performance airplanes", correct: false },
            { text: "Hold a type rating for such airplanes", correct: false }
        ]
    },
    {
        question: "To act as PIC of a tailwheel airplane, without prior experience, a pilot must:",
        choices: [
            { text: "Receive and log flight training from an authorized instructor", correct: true },
            { text: "Pass a written knowledge test for tailwheel operations", correct: false },
            { text: "Complete 5 takeoffs and landings in a tailwheel airplane", correct: false }
        ]
    },
    {
        question: "What flight time may a pilot log as second in command?",
        choices: [
            { text: "All flight time WHEN QUALIFIED and occupying a crewmember station in an aircraft that requires more than 1 pilot", correct: true },
            { text: "Any time spent in the cockpit observing the operation of the aircraft", correct: false },
            { text: "Flight time while under the supervision of a flight instructor", correct: false }
        ]
    },
    {
        question: "What flight time must be documented and recorded by a pilot exercising the privileges of a commercial certificate?",
        choices: [
            { text: "Flight time showing training and aeronautical experience to meet requirements for a certificate, rating, or flight review", correct: true },
            { text: "All flight time logged in any type of aircraft", correct: false },
            { text: "Flight time conducted in IMC conditions", correct: false }
        ]
    },
    {
        question: "To serve as second in command of an airplane that is certificated for more than one pilot crewmember, and operated under part 91, a person must:",
        choices: [
            { text: "Within the last 12 months, become familiar with the required information, and perform and log pilot time in the type of airplane for which privileges are requested", correct: true },
            { text: "Hold a commercial pilot certificate", correct: false },
            { text: "Have at least 100 hours of total flight time", correct: false }
        ]
    },
    {
        question: "To act as PIC of an aircraft under 14 CFR part 91, a commercial pilot must have satisfactorily accomplished a flight review or completed a proficiency check within the preceding:",
        choices: [
            { text: "24 months", correct: true },
            { text: "12 months", correct: false },
            { text: "36 months", correct: false }
        ]
    },
    {
        question: "If a pilot does not meet the recency of experience requirements for night flight and official sunset is 1900 CST, the latest time passengers should be carried is:",
        choices: [
            { text: "1959 CST", correct: true },
            { text: "2000 CST", correct: false },
            { text: "2030 CST", correct: false }
        ]
    },
    {
        question: "Prior to carrying passengers at night, the PIC must have accomplished the required takeoffs and landings in:",
        choices: [
            { text: "The same category, class, and type of aircraft (if a type rating is required)", correct: true },
            { text: "Any aircraft within the same category and class", correct: false },
            { text: "A single-engine aircraft, regardless of category or class", correct: false }
        ]
    },
    {
        question: "No pilot may act as PIC of an aircraft under IFR or in weather conditions less than the minimums prescribed for VFR unless that pilot has, within the last 6 months, performed and logged under actual or simulated instrument conditions, at least:",
        choices: [
            { text: "6 instrument approaches, holding procedures, intercepting and tracking courses, or passed an instrument proficiency check in an aircraft that is appropriate to the aircraft category", correct: true },
            { text: "3 instrument approaches and one holding procedure", correct: false },
            { text: "A minimum of 10 hours of instrument flight time", correct: false }
        ]
    },
    {
        question: "To serve as PIC of an airplane that is certified for more than one pilot crewmember, and operated under part 91, a person must:",
        choices: [
            { text: "Complete a PIC proficiency check within the preceding 12 months in an airplane that is type certificated for more than one pilot", correct: true },
            { text: "Hold a second-in-command endorsement", correct: false },
            { text: "Pass a written knowledge test for the type of airplane", correct: false }
        ]
    },
    {
        question: "Pilots who change their permanent mailing address and fail to notify the FAA Airmen Certification Branch of this change, are entitled to exercise the privileges of their pilot certificate for a period of:",
        choices: [
            { text: "30 days", correct: true },
            { text: "60 days", correct: false },
            { text: "90 days", correct: false }
        ]
    },
    {
        question: "To act as PIC of an airplane towing a glider, a pilot must have accomplished, within 12 months, at least:",
        choices: [
            { text: "3 actual or simulated glider tows while accompanied by a qualified tow pilot", correct: true },
            { text: "5 solo glider tows", correct: false },
            { text: "10 glider flights as a pilot or passenger", correct: false }
        ]
    },
    {
        question: "To act as PIC of an airplane towing a glider, the tow pilot is required to have:",
        choices: [
            { text: "A logbook endorsement from an authorized glider instructor certifying receipt of ground and flight training in gliders, and be proficient with techniques and procedures for safe towing of gliders", correct: true },
            { text: "At least 50 hours of flight time towing gliders", correct: false },
            { text: "A type rating for glider towing operations", correct: false }
        ]
    },
    {
        question: "What limitation is imposed on a newly certificated commercial pilot-airplane, if that person does not hold an instrument rating? The carriage of passengers:",
        choices: [
            { text: "For hire on cross-country flights IN EXCESS of 50 NM, or for hire at night is prohibited", correct: true },
            { text: "Is limited to day VFR operations only", correct: false },
            { text: "Is prohibited entirely until the instrument rating is obtained", correct: false }
        ]
    },
    {
        question: "A person with a Commercial Pilot certificate may act as PIC of an aircraft for compensation or hire, if that person:",
        choices: [
            { text: "Is qualified in accordance with 14 CFR part 61 and with the applicable parts that apply to the operation", correct: true },
            { text: "Has a type rating for the specific aircraft", correct: false },
            { text: "Has logged at least 500 hours of total flight time", correct: false }
        ]
    },
    {
        question: "What action must be taken when a pilot in command deviated from any rule in 14 CFR part 91?",
        choices: [
            { text: "Upon the request of the Administrator, send a written report of that deviation to the Administrator", correct: true },
            { text: "File a voluntary deviation report within 24 hours", correct: false },
            { text: "Notify air traffic control immediately", correct: false }
        ]
    },
    {
        question: "What person is directly responsible for the final authority as to the operation of the airplane?",
        choices: [
            { text: "Pilot in command", correct: true },
            { text: "Owner of the aircraft", correct: false },
            { text: "The mechanic who last inspected the aircraft", correct: false }
        ]
    },
    {
        question: "Who is responsible for determining if an aircraft is in condition for safe flight?",
        choices: [
            { text: "Pilot in command", correct: true },
            { text: "Aircraft owner", correct: false },
            { text: "Certified aircraft mechanic", correct: false }
        ]
    },
    {
        question: "When operating a US-registered civil aircraft, which document is required by regulation to be available in the aircraft?",
        choices: [
            { text: "A current, approved Airplane Flight Manual", correct: true },
            { text: "The aircraft maintenance records", correct: false },
            { text: "A copy of the latest NOTAMs", correct: false }
        ]
    },
    {
        question: "A PIC of a civil aircraft may not allow any object to be dropped from that aircraft in flight:",
        choices: [
            { text: "If it creates a hazard to persons and property", correct: true },
            { text: "Without first notifying air traffic control", correct: false },
            { text: "Unless the aircraft is below 500 feet AGL", correct: false }
        ]
    },
    {
        question: "Portable electronic devices which may cause interference with the navigation or communication system may not be operated on a US-registered civil aircraft being flown:",
        choices: [
            { text: "In air carrier operations", correct: true },
            { text: "By a commercial pilot", correct: false },
            { text: "Under Part 91 operations", correct: false }
        ]
    },
    {
        question: "Portable electronic devices which may cause interference with the navigation or communication system may not be operated on a US-registered civil aircraft being operated:",
        choices: [
            { text: "Under IFR", correct: true },
            { text: "By a private pilot", correct: false },
            { text: "During VFR operations", correct: false }
        ]
    },
    {
        question: "No person may operate a large civil aircraft of US registry which is subject to a lease, unless the lessee has mailed a copy of the lease to the FAA Aircraft Registration Branch, Oklahoma City, within how many hours of its execution?",
        choices: [
            { text: "24", correct: true },
            { text: "48", correct: false },
            { text: "12", correct: false }
        ]
    },
    {
        question: "When is preflight action required, relative to alternatives available, if the planned flight cannot be completed?",
        choices: [
            { text: "Any flight not in the vicinity of an airport", correct: true },
            { text: "Only IFR flights", correct: false },
            { text: "Flights exceeding 50 nautical miles", correct: false }
        ]
    },
    {
        question: "The required preflight action relative to weather reports and fuel requirements is applicable to:",
        choices: [
            { text: "Any flight not in the vicinity of an airport", correct: true },
            { text: "Flights conducted above 10,000 feet MSL", correct: false },
            { text: "Only IFR flights", correct: false }
        ]
    },
    {
        question: "Before beginning any flight under IFR, the PIC must become familiar with all available information concerning that flight. In addition, the pilot must:",
        choices: [
            { text: "Be familiar with the runway lengths at airports of intended use, and the alternatives available, if the flight cannot be completed", correct: true },
            { text: "Contact air traffic control for updated NOTAMs", correct: false },
            { text: "Perform a test of all navigation systems", correct: false }
        ]
    },
    {
        question: "Required flight crewmembers’ seatbelts must be fastened:",
        choices: [
            { text: "While the crewmembers are at their stations", correct: true },
            { text: "Only during turbulence", correct: false },
            { text: "When instructed by air traffic control", correct: false }
        ]
    },
    {
        question: "Each required flight crewmember is required to keep his or her shoulder harness fastened:",
        choices: [
            { text: "During takeoff and landing, unless he or she is unable to perform required duties", correct: true },
            { text: "At all times during flight", correct: false },
            { text: "Only when instructed by the PIC", correct: false }
        ]
    },
    {
        question: "With US-registered civil airplanes, the use of safety belts is required during movement on the surface, takeoffs, and landings for:",
        choices: [
            { text: "Each person over 2 years of age on board", correct: true },
            { text: "Only flight crewmembers", correct: false },
            { text: "All passengers, regardless of age", correct: false }
        ]
    },
    {
        question: "Operating regulations for US-registered civil airplanes require that during movement on the surface, takeoffs, and landings, a seat belt and shoulder harness (if installed) must be properly secured about each:",
        choices: [
            { text: "Person on board", correct: true },
            { text: "Flight crewmember", correct: false },
            { text: "Passenger only", correct: false }
        ]
    },
    {
        question: "No person may operate an aircraft in simulated instrument flight conditions unless the:",
        choices: [
            { text: "Other control seat is occupied by a SAFETY PILOT, who holds at least a private pilot certificate and is appropriately rated", correct: true },
            { text: "Other control seat is occupied by a CFI", correct: false },
            { text: "Aircraft is equipped with a functioning autopilot system", correct: false }
        ]
    },
    {
        question: "Which is true with respect to formation flights? Formation flights are:",
        choices: [
            { text: "Not authorized when carrying passengers for hire", correct: true },
            { text: "Authorized with ATC approval", correct: false },
            { text: "Allowed as long as pilots maintain visual separation", correct: false }
        ]
    },
    {
        question: "Which is true with respect to operating near other aircraft in flight? They are:",
        choices: [
            { text: "Not authorized, when operated so close to another aircraft they can create a collision hazard", correct: true },
            { text: "Permitted if both pilots agree on separation distance", correct: false },
            { text: "Allowed only during daylight hours", correct: false }
        ]
    },
    {
        question: "Which is true with respect to formation flights? Formation flights are:",
        choices: [
            { text: "Not authorized, except by arrangement with the PIC of each aircraft", correct: true },
            { text: "Authorized with FAA approval", correct: false },
            { text: "Allowed only with one aircraft under IFR", correct: false }
        ]
    },
    {
        question: "Airplane A is overtaking Airplane B. Which airplane has the right of way?",
        choices: [
            { text: "Airplane B; the pilot should expect to be passed on the right", correct: true },
            { text: "Airplane A; overtaking aircraft always has priority", correct: false },
            { text: "Neither; right of way is determined by altitude", correct: false }
        ]
    },
    {
        question: "An airplane is overtaking a helicopter. Which aircraft has the right of way?",
        choices: [
            { text: "Helicopter; the pilot should expect to be passed on the right", correct: true },
            { text: "Airplane; airplanes always have priority over helicopters", correct: false },
            { text: "Neither; right of way depends on airspeed", correct: false }
        ]
    },
    {
        question: "Two aircraft of the same category are approaching an airport for the purpose of landing. The right of way belongs to the one:",
        choices: [
            { text: "At a lower altitude, but the pilot shall not take advantage of this rule to cut in front of or to overtake the other aircraft", correct: true },
            { text: "Closest to the runway threshold", correct: false },
            { text: "That makes the first call to ATC", correct: false }
        ]
    },
    {
        question: "During a night operation, the pilot of #1 sees only the green light of #2. Who has the right of way?",
        choices: [
            { text: "#1; because #1 is to the right of #2", correct: true },
            { text: "#2; because #2 is on the left of #1", correct: false },
            { text: "Neither; right of way depends on altitude", correct: false }
        ]
    },
    {
        question: "A pilot flying a single-engine airplane observes a multi-engine airplane approaching from the left. Which pilot should give way?",
        choices: [
            { text: "The pilot of the multi-engine airplane should give way; the single-engine airplane is to its right", correct: true },
            { text: "The pilot of the single-engine airplane should give way; the multi-engine airplane has priority", correct: false },
            { text: "Neither; both should turn to the left", correct: false }
        ]
    },
    {
        question: "While in flight, a helicopter and an airplane are converging at a 90-degree angle, and the helicopter is located to the right of the plane. Which one has the right of way?",
        choices: [
            { text: "Helicopter; it is to the right of the plane", correct: true },
            { text: "Airplane; it has priority over helicopters", correct: false },
            { text: "Neither; priority is determined by altitude", correct: false }
        ]
    },
    {
        question: "What altimeter setting is required when operating an aircraft at 18,000 feet MSL?",
        choices: [
            { text: "29.92 Hg", correct: true },
            { text: "30.00 Hg", correct: false },
            { text: "31.00 Hg", correct: false }
        ]
    },
    {
        question: "After an ATC clearance has been obtained, a pilot may not deviate from that clearance unless the pilot:",
        choices: [
            { text: "Receives an amended clearance or has an emergency", correct: true },
            { text: "Notifies ATC after deviation", correct: false },
            { text: "Receives approval from another flight crew", correct: false }
        ]
    },
    {
        question: "When weather information indicates that abnormally high barometric pressure exists, or will be above ___ inches of mercury, flight operations will not be authorized contrary to the requirements published in NOTAMs:",
        choices: [
            { text: "31.00", correct: true },
            { text: "30.50", correct: false },
            { text: "30.92", correct: false }
        ]
    },
    {
        question: "What is the minimum flight visibility and proximity to cloud requirements for VFR flight, at 6,500 feet MSL, in Class C, D, and E airspace?",
        choices: [
            { text: "3 miles visibility; 1000 feet above and 500 feet below", correct: true },
            { text: "1 mile visibility; clear of clouds", correct: false },
            { text: "5 miles visibility; 2000 feet horizontal", correct: false }
        ]
    },
    {
        question: "The minimum flight visibility for VFR flight increases to 5 SM beginning at an altitude of:",
        choices: [
            { text: "10,000 feet MSL if above 1200 feet AGL", correct: true },
            { text: "12,000 feet MSL", correct: false },
            { text: "7,000 feet MSL if above 1,200 feet AGL", correct: false }
        ]
    },
    {
        question: "VFR cruising altitudes are required to be maintained when flying:",
        choices: [
            { text: "More than 3,000 feet AGL; based on magnetic course", correct: true },
            { text: "At or below 3,000 feet AGL", correct: false },
            { text: "Only during cross-country flights", correct: false }
        ]
    },
    {
        question: "If weather conditions are such that it is required to designate an alternate airport on your IFR flight plan, you should plan to carry enough fuel to arrive at the first airport of intended landing, fly from that airport to the alternate, and fly thereafter for:",
        choices: [
            { text: "45 minutes at normal cruising speed", correct: true },
            { text: "30 minutes at maximum speed", correct: false },
            { text: "60 minutes at reduced speed", correct: false }
        ]
    },
    {
        question: "For an airport with an approved instrument approach to be listed as an alternate airport on an IFR flight plan, the forecasted weather conditions at the time of arrival must be at or above the following weather minimums:",
        choices: [
            { text: "Ceiling 800 feet and visibility 2 SM for NON PRECISION", correct: true },
            { text: "Ceiling 1000 feet and visibility 3 SM for NON PRECISION", correct: false },
            { text: "Ceiling 600 feet and visibility 2 SM for PRECISION", correct: false }
        ]
    },
    {
        question: "For an airport without an approved instrument approach procedure to be listed as an alternate airport on an IFR flight plan, the forecasted weather conditions at the time of arrival must have at least a:",
        choices: [
            { text: "Ceiling and visibility that allows for descent, approach, and landing on their basic VFR", correct: true },
            { text: "Minimum ceiling of 1000 feet and visibility of 3 SM", correct: false },
            { text: "Clearance above all obstacles within a 10-mile radius", correct: false }
        ]
    },
    {
        question: "When must an operational check on the aircraft VOR equipment be accomplished to operate under IFR?",
        choices: [
            { text: "Within the preceding 30 days", correct: true },
            { text: "Within the preceding 60 days", correct: false },
            { text: "Annually", correct: false }
        ]
    },
    {
        question: "What is the maximum bearing error allowed for an operational VOR equipment check when using an FAA-approved ground test signal?",
        choices: [
            { text: "4 degrees", correct: true },
            { text: "6 degrees", correct: false },
            { text: "3 degrees", correct: false }
        ]
    },
    {
        question: "Which data must be recorded in the aircraft logbook or other record by a pilot making a VOR operational check for IFR operations?",
        choices: [
            { text: "Date of check, place of operational check, bearing error, and signature", correct: true },
            { text: "Aircraft type, time of check, and weather conditions", correct: false },
            { text: "Date of check and weather visibility conditions", correct: false }
        ]
    },
    {
        question: "On an instrument approach where a DH or MDA is applicable, a pilot may not operate below or continue the approach unless the:",
        choices: [
            { text: "Aircraft is continuously in position from which a descent to a normal landing on the intended runway can be made", correct: true },
            { text: "Runway environment is visible at all times", correct: false },
            { text: "Aircraft is at or below the minimum descent altitude", correct: false }
        ]
    },
    {
        question: "Pilots are not authorized to land an aircraft from an instrument approach unless the:",
        choices: [
            { text: "Flight visibility is at, or exceeds, the visibility prescribed in the approach procedure being used", correct: true },
            { text: "Ceiling is at least 200 feet above DH or MDA", correct: false },
            { text: "Runway lights are visible", correct: false }
        ]
    },
    {
        question: "A pilot performing a published instrument approach is not authorized to perform a procedure turn when:",
        choices: [
            { text: "Receiving a radar vector to a final approach course or fix", correct: true },
            { text: "Below the minimum descent altitude", correct: false },
            { text: "Within 10 miles of the airport", correct: false }
        ]
    },
    {
        question: "Except when necessary for takeoff or landing, unless otherwise authorized by the Administrator, the minimum altitude for IFR flight is:",
        choices: [
            { text: "2000 feet above the highest obstacle over designated mountainous terrain; 1000 feet above the highest obstacle over terrain elsewhere", correct: true },
            { text: "1000 feet above ground level at all times", correct: false },
            { text: "1500 feet above the highest terrain", correct: false }
        ]
    },
    {
        question: "The PIC of an aircraft operated under IFR, in controlled airspace not in radar contact, shall report by radio as soon as possible when:",
        choices: [
            { text: "Passing each designated reporting point, to include time and altitude", correct: true },
            { text: "Changing the flight level", correct: false },
            { text: "Reaching 1000 feet above the assigned altitude", correct: false }
        ]
    },
    {
        question: "The PIC of an aircraft operated under IFR, in controlled airspace, shall report as soon as practical to ATC when:",
        choices: [
            { text: "Experiencing any malfunctions of navigational, approach, or communications equipment, occurring in flight", correct: true },
            { text: "Diverting from the assigned route", correct: false },
            { text: "Descending below the minimum descent altitude", correct: false }
        ]
    },
    {
        question: "Which is required equipment for powered aircraft during VFR night flights?",
        choices: [
            { text: "An electric landing light, if the flight is for hire", correct: true },
            { text: "A spare flashlight", correct: false },
            { text: "Two-position lights", correct: false }
        ]
    },
    {
        question: "Which is required equipment for powered aircraft during VFR night flights?",
        choices: [
            { text: "Anti-Collision light system", correct: true },
            { text: "Auxiliary battery pack", correct: false },
            { text: "Operational cockpit voice recorder", correct: false }
        ]
    },
    {
        question: "Approved flotation gear, readily available to each occupant, is required on each airplane if it is being flown for hire over water:",
        choices: [
            { text: "Beyond power-off gliding distance from shore", correct: true },
            { text: "More than 25 miles from the nearest airport", correct: false },
            { text: "Above 10,000 feet MSL", correct: false }
        ]
    },
    {
        question: "The maximum cumulative time that an emergency locator transmitter may be operated before the rechargeable battery must be recharged is:",
        choices: [
            { text: "60 minutes", correct: true },
            { text: "30 minutes", correct: false },
            { text: "90 minutes", correct: false }
        ]
    },
    {
        question: "If not equipped with required position lights, an aircraft must terminate flight:",
        choices: [
            { text: "At sunset", correct: true },
            { text: "30 minutes before sunset", correct: false },
            { text: "One hour after sunset", correct: false }
        ]
    },
    {
        question: "If an aircraft is not equipped with an electrical or anti-collision light system, no person may operate the aircraft:",
        choices: [
            { text: "After sunset to sunrise", correct: true },
            { text: "Within controlled airspace", correct: false },
            { text: "Over water", correct: false }
        ]
    },
    {
        question: "What are oxygen requirements when operating at cabin pressure altitudes above 15,000 feet MSL?",
        choices: [
            { text: "The flight crew and passengers must be provided with supplemental oxygen", correct: true },
            { text: "The flight crew must use oxygen continuously", correct: false },
            { text: "Only the passengers must use oxygen", correct: false }
        ]
    },
    {
        question: "In accordance with 14 CFR part 91, supplemental oxygen must be used by the required minimum flight crew for that time exceeding 30 minutes while at cabin pressure altitudes of:",
        choices: [
            { text: "12,500 feet MSL up to and including 14,000 feet MSL", correct: true },
            { text: "14,500 feet MSL", correct: false },
            { text: "10,000 feet MSL", correct: false }
        ]
    },
    {
        question: "A coded transponder equipped with altitude reporting equipment is required for:",
        choices: [
            { text: "Class A, B, and C airspace areas", correct: true },
            { text: "Class D and E airspace areas", correct: false },
            { text: "Class G airspace only", correct: false }
        ]
    },
    {
        question: "In the contiguous US, excluding the airspace at and below 2,500 feet AGL, an operable coded transponder equipped with mode C capability is required in all airspace above:",
        choices: [
            { text: "10,000 feet MSL", correct: true },
            { text: "5,000 feet MSL", correct: false },
            { text: "8,000 feet MSL", correct: false }
        ]
    },
    {
        question: "What is the minimum altitude and flight visibility required for acrobatic flight?",
        choices: [
            { text: "1500 feet AGL and 3 miles", correct: true },
            { text: "2000 feet AGL and 5 miles", correct: false },
            { text: "1000 feet AGL and 1 mile", correct: false }
        ]
    },
    {
        question: "What is required to operate an aircraft towing an advertising banner?",
        choices: [
            { text: "A certificate of waiver issued by the administrator", correct: true },
            { text: "A special type rating", correct: false },
            { text: "A commercial pilot license with 500 hours", correct: false }
        ]
    },
    {
        question: "Which is true with respect to operating limitations of a “restricted” category airplane?",
        choices: [
            { text: "No person may operate a “restricted” category airplane carrying passengers or property for compensation or hire", correct: true },
            { text: "A restricted category airplane may be operated with passengers if it is under 5000 lbs", correct: false },
            { text: "Restricted category airplanes may carry passengers for hire with a special endorsement", correct: false }
        ]
    },
    {
        question: "The carriage of passengers for hire by a commercial pilot is:",
        choices: [
            { text: "Not authorized in limited category", correct: true },
            { text: "Authorized for commercial operations", correct: false },
            { text: "Authorized with an additional endorsement", correct: false }
        ]
    },
    {
        question: "No person may operate an aircraft that has an experimental airworthiness certificate:",
        choices: [
            { text: "When carrying persons or property for hire", correct: true },
            { text: "When carrying more than one passenger", correct: false },
            { text: "Unless the aircraft is used solely for training", correct: false }
        ]
    },
    {
        question: "Which is true with respect to operating limitations of a primary category airplane?",
        choices: [
            { text: "No person may operate a primary category airplane carrying passengers or property for compensation or hire", correct: true },
            { text: "Primary category airplanes are authorized for compensation if used for training", correct: false },
            { text: "Primary category airplanes can be used for hire if they meet maintenance requirements", correct: false }
        ]
    },
    {
        question: "Assuring compliance with an airworthiness directive is the responsibility of:",
        choices: [
            { text: "Owner or operator of the aircraft", correct: true },
            { text: "The FAA only", correct: false },
            { text: "The aircraft manufacturer", correct: false }
        ]
    },
    {
        question: "Who is primarily responsible for maintaining an aircraft in an airworthy condition?",
        choices: [
            { text: "Owner or operator of the aircraft", correct: true },
            { text: "Aircraft mechanic", correct: false },
            { text: "Aircraft manufacturer", correct: false }
        ]
    },
    {
        question: "After the annual inspection has been completed and the aircraft has been returned to service, an appropriate notation should be made:",
        choices: [
            { text: "In the aircraft maintenance records", correct: true },
            { text: "In the pilot's logbook", correct: false },
            { text: "In the aircraft registration certificate", correct: false }
        ]
    },
    {
        question: "A standard airworthiness certificate remains in effect as long as the aircraft receives:",
        choices: [
            { text: "Required maintenance and inspections", correct: true },
            { text: "Regular engine overhauls", correct: false },
            { text: "A new inspection every 2 years", correct: false }
        ]
    },
    {
        question: "If an aircraft's operation in flight was substantially affected by an alteration or repair, the aircraft documents must show that it was test flown and approved for return to service by an appropriately rated pilot prior to being operated:",
        choices: [
            { text: "With passengers on board", correct: true },
            { text: "Under visual flight rules (VFR)", correct: false },
            { text: "For training purposes only", correct: false }
        ]
    },
    {
        question: "Which is true concerning required maintenance inspections?",
        choices: [
            { text: "An annual inspection may be substituted for a 100-hour inspection", correct: true },
            { text: "A 100-hour inspection may be substituted for an annual inspection", correct: false },
            { text: "There is no substitution for annual inspections", correct: false }
        ]
    },
    {
        question: "An aircraft carrying passengers for hire has been on a schedule of inspection every 100 hours of time in service. Under which condition, may that aircraft be operated beyond 100 hours without a new inspection?",
        choices: [
            { text: "The 100-hour limitation may be exceeded by not more than 10 hours if necessary to reach a place at which the inspection can be done", correct: true },
            { text: "It cannot exceed 100 hours under any circumstance", correct: false },
            { text: "The aircraft may be flown beyond 100 hours if authorized by the FAA", correct: false }
        ]
    },
    {
        question: "If an ATC transponder installed in an aircraft has not been tested, inspected, and found to comply with regulations within a specified period, what is the limitation on its use?",
        choices: [
            { text: "Its use is not permitted", correct: true },
            { text: "It may be used under visual flight rules (VFR)", correct: false },
            { text: "It may be used for up to 60 days", correct: false }
        ]
    },
    {
        question: "An ATC transponder is not to be used unless it has been tested, inspected, and found to comply with regulations within the preceding:",
        choices: [
            { text: "24 months", correct: true },
            { text: "12 months", correct: false },
            { text: "6 months", correct: false }
        ]
    },
    {
        question: "Aircraft maintenance records must include the current status of the:",
        choices: [
            { text: "Life-limited parts of each airframe, engine, propeller, rotor, and appliance", correct: true },
            { text: "Time remaining for the next inspection", correct: false },
            { text: "Owner's details and certificate number", correct: false }
        ]
    },
    {
        question: "Which is correct concerning preventive maintenance, when accomplished by a pilot?",
        choices: [
            { text: "A record of preventive maintenance must be entered in the maintenance records", correct: true },
            { text: "The pilot must submit a report to the FAA after completing preventive maintenance", correct: false },
            { text: "Preventive maintenance can be done without any record if it is within the pilot's scope", correct: false }
        ]
    },
    {
        question: "Which is true relating to airworthiness directives (ADs)?",
        choices: [
            { text: "Non-compliance with ADs renders an aircraft unairworthy", correct: true },
            { text: "ADs are only recommendations, not mandatory", correct: false },
            { text: "ADs must be complied with if the aircraft is operating for hire", correct: false }
        ]
    },
    {
        question: "A new maintenance record being used for an aircraft engine rebuilt by the manufacturer must include previous:",
        choices: [
            { text: "Changes as required by airworthiness directives", correct: true },
            { text: "Time in service after the engine rebuild", correct: false },
            { text: "Owner information for the aircraft", correct: false }
        ]
    },
    {
        question: "In what type of operation not regulated by 14 CFR part 119, a commercial pilot may act as PIC and receive compensation for services?",
        choices: [
            { text: "Non-stop flights within a 25SM radius of an airport to carry persons for intentional parachute jumps", correct: true },
            { text: "Airline transport operations under 14 CFR part 121", correct: false },
            { text: "Flying over international waters", correct: false }
        ]
    },
    {
        question: "In what type of operation not regulated by 14 CFR part 119, a commercial pilot may act as PIC and receive compensation for services?",
        choices: [
            { text: "Crop dusting, spraying, and bird chasing", correct: true },
            { text: "Flying for a charter company under Part 135", correct: false },
            { text: "Air tours in a city with a population over 1 million", correct: false }
        ]
    },
    {
        question: "What period of time must the person be hospitalized before an injury may be defined by the NTSB as a serious injury?",
        choices: [
            { text: "48 hours; commencing within 7 days after the date of injury", correct: true },
            { text: "24 hours; within 7 days after the injury", correct: false },
            { text: "72 hours; commencing within 10 days after the injury", correct: false }
        ]
    },
    {
        question: "When should notification of an aircraft accident be made to the NTSB if there was substantial damage and no injuries?",
        choices: [
            { text: "Immediately", correct: true },
            { text: "Within 24 hours", correct: false },
            { text: "Within 48 hours", correct: false }
        ]
    },
    {
        question: "NTSB part 830 requires an immediate notification as a result of which incident?",
        choices: [
            { text: "Any required flight crew member being unable to perform flight duties because of illness", correct: true },
            { text: "An aircraft veering off the runway", correct: false },
            { text: "A minor equipment malfunction", correct: false }
        ]
    },
    {
        question: "Which incident would require that the nearest NTSB field office be notified immediately?",
        choices: [
            { text: "In-flight fire", correct: true },
            { text: "Minor collision on the ground", correct: false },
            { text: "Flight delays due to weather", correct: false }
        ]
    },
    {
        question: "Which airborne incident would require that the nearest NTSB field office be notified immediately?",
        choices: [
            { text: "Flight control system malfunction or failure", correct: true },
            { text: "A minor equipment malfunction", correct: false },
            { text: "A temporary loss of radio communication", correct: false }
        ]
    },
    {
        question: "While taxiing for takeoff, a small fire burned insulation from a transceiver wire. What action would be required to comply with the NTSB part 830?",
        choices: [
            { text: "No notification or report is required", correct: true },
            { text: "Immediate notification to NTSB", correct: false },
            { text: "A written report to the FAA is required", correct: false }
        ]
    },
    {
        question: "While taxiing on the parking ramp, the landing gear, wheel, or tire was damaged by striking ground equipment. What action would be required to comply with NTSB part 830?",
        choices: [
            { text: "No notification or report is required", correct: true },
            { text: "Notification of NTSB field office required", correct: false },
            { text: "Report to the FAA within 48 hours", correct: false }
        ]
    },
    {
        question: "Notification to the NTSB is required when there is substantial damage:",
        choices: [
            { text: "Which adversely affects structural strength or flight characteristics", correct: true },
            { text: "Caused by weather conditions", correct: false },
            { text: "That affects the avionics system", correct: false }
        ]
    },
    {
        question: "During a flight, a fire, which was extinguished, burned the insulation from a transceiver wire. What action is required by regulations?",
        choices: [
            { text: "An immediate notification by the operator of the aircraft to the nearest NTSB field office", correct: true },
            { text: "A report within 24 hours to the NTSB", correct: false },
            { text: "No report required since the fire was extinguished", correct: false }
        ]
    },
    {
        question: "How many days after an accident is a report required to be filed with the nearest NTSB field office?",
        choices: [
            { text: "10 days", correct: true },
            { text: "5 days", correct: false },
            { text: "30 days", correct: false }
        ]
    },
    {
        question: "The operator of an aircraft that has been involved in an incident is required to submit a report to the nearest field office of the NTSB:",
        choices: [
            { text: "Only if requested to do so", correct: true },
            { text: "Immediately, regardless of severity", correct: false },
            { text: "Within 48 hours of the incident", correct: false }
        ]
    },
    {
        question: "During aircraft operations on the ground, no person may taxi an aircraft on the movement area of an airport unless the person at the controls:",
        choices: [
            { text: "Has been authorized by the owner, the lessee, or a designated agent", correct: true },
            { text: "Has completed a written test on airport procedures", correct: false },
            { text: "Has logged at least 100 hours of ground operations", correct: false }
        ]
    },
    {
        question: "To act as a pilot of a civil aircraft of the Republic of the Philippines registry, a pilot shall have his or her physical possession or readily accessible in the aircraft a valid pilot license or special purpose authorization issued under these regulations when:",
        choices: [
            { text: "Anytime acting as Pilot in Command", correct: true },
            { text: "During flight above 10,000 feet", correct: false },
            { text: "When operating under Part 91 regulations", correct: false }
        ]
    },
    {
        question: "Applicant for CPL must complete at least _____ hours of cross country time as pilot in command including a cross country flight with distance totaling not less than _____ km / _____ nm:",
        choices: [
            { text: "20 hours, 540 km, 300 nm", correct: true },
            { text: "15 hours, 500 km, 250 nm", correct: false },
            { text: "25 hours, 600 km, 350 nm", correct: false }
        ]
    },
    {
        question: "Who is directly responsible for and has the final authority as to the operation of the aircraft?",
        choices: [
            { text: "The PIC of an aircraft shall have final authority as to the operation of the aircraft while he or she is in command", correct: true },
            { text: "The owner of the aircraft", correct: false },
            { text: "The aircraft manufacturer", correct: false }
        ]
    },
    {
        question: "In the manner of compliance, what is the basic difference between ATC procedures and CAR?",
        choices: [
            { text: "Mandatory for CAR, optional for ATC", correct: true },
            { text: "Mandatory for both ATC and CAR", correct: false },
            { text: "Optional for both ATC and CAR", correct: false }
        ]
    },
    {
        question: "Unless authorized by the appropriate ATC authority, no pilot may operate in VFR flight:",
        choices: [
            { text: "Above 200", correct: true },
            { text: "At transonic and supersonic speeds", correct: true },
            { text: "Below 1000 feet AGL", correct: false }
        ]
    },
    {
        question: "PCARS part 2 refers to:",
        choices: [
            { text: "Licensing", correct: true },
            { text: "Airworthiness", correct: false },
            { text: "Air traffic control", correct: false }
        ]
    },
    {
        question: "What part of PCAR prescribed the requirements for instruments and equipment to be installed on aircraft expected to operate in the Republic of the Philippines?",
        choices: [
            { text: "Part 7", correct: true },
            { text: "Part 2", correct: false },
            { text: "Part 5", correct: false }
        ]
    },
    {
        question: "Issuance of airmen licenses is based on PCAR?",
        choices: [
            { text: "Part 2", correct: true },
            { text: "Part 7", correct: false },
            { text: "Part 18", correct: false }
        ]
    },
    {
        question: "Which part addresses article 32 of the Chicago Convention that required the Republic of the Philippines to issue certificates of competency and licenses or validates such?",
        choices: [
            { text: "Part 2", correct: true },
            { text: "Part 5", correct: false },
            { text: "Part 7", correct: false }
        ]
    },
    {
        question: "To act as a crew member, a person must have consumed alcohol in the preceding:",
        choices: [
            { text: "8 hours", correct: true },
            { text: "6 hours", correct: false },
            { text: "12 hours", correct: false }
        ]
    },
    {
        question: "This part prescribes the requirements of the Republic of the Philippines that apply to the carriage of dangerous goods by air as specified in the International Civil Aviation Organization document, technical instructions for the safe transport of dangerous goods by air:",
        choices: [
            { text: "Part 18", correct: true },
            { text: "Part 7", correct: false },
            { text: "Part 5", correct: false }
        ]
    },
    {
        question: "PCARS part 5 refers to:",
        choices: [
            { text: "Airworthiness", correct: true },
            { text: "Licensing", correct: false },
            { text: "Operations", correct: false }
        ]
    },
    {
        question: "Which part of the PCAR refers to the ICAO ANNEX 1?",
        choices: [
            { text: "Part 2", correct: true },
            { text: "Part 5", correct: false },
            { text: "Part 18", correct: false }
        ]
    },
    {
        question: "A CPL applicant shall have completed not less than _____ of flight time or 150 hours of flight time if he has satisfactorily completed a course of approved training:",
        choices: [
            { text: "200 hours", correct: true },
            { text: "250 hours", correct: false },
            { text: "180 hours", correct: false }
        ]
    },
    {
        question: "If the control tower uses a light signal to direct a pilot to give way to the other aircraft and continue circling, the light will be:",
        choices: [
            { text: "Steady red", correct: true },
            { text: "Flashing green", correct: false },
            { text: "Flashing white", correct: false }
        ]
    },
    {
        question: "No person may operate an aircraft in simulated instrument flight condition unless:",
        choices: [
            { text: "The aircraft has fully functioning dual controls except in the case of airships", correct: true },
            { text: "The other control seat is occupied by a safety pilot who holds at least a PPL with appropriate category and class rating", correct: true },
            { text: "The safety pilot is competent and able to maintain control of the aircraft", correct: true }
        ]
    },
    {
        question: "A series of green flashes directing from the control tower to an aircraft on the ground is a signal to:",
        choices: [
            { text: "Clear to taxi", correct: true },
            { text: "Clear for takeoff", correct: false },
            { text: "Return to parking", correct: false }
        ]
    },
    {
        question: "For enroute operations, no person may use an autopilot at an altitude above the terrain that is less than:",
        choices: [
            { text: "500 ft", correct: true },
            { text: "1,000 ft", correct: false },
            { text: "1,500 ft", correct: false }
        ]
    },
    {
        question: "Except when necessary for takeoff and landing, no person may operate an aircraft below the following altitude over any congested area of the city or town or settlement or over any open air assembly of persons at an altitude below:",
        choices: [
            { text: "300m (1,000 feet) above the highest obstacle within a horizontal radius of 600m (2,000 feet) of the aircraft", correct: true },
            { text: "500m (1,500 feet) above the highest obstacle within a horizontal radius of 1,000m", correct: false },
            { text: "150m (500 feet) above the highest obstacle within a horizontal radius of 300m", correct: false }
        ]
    },
    {
        question: "If an alternate minima are not published and if there is no prohibition against using the airport as an IFR flight planning alternate, each PIC shall ensure that the meteorological conditions at that alternate at the ETA will be at or above:",
        choices: [
            { text: "For a precision approach procedure, a ceiling of at least 180m (600 feet) and visibility of not less than 3km", correct: true },
            { text: "For a non-precision approach procedure, a ceiling of at least 240m (800 feet) and visibility of not less than 5km", correct: true },
            { text: "For a visual flight procedure, a ceiling of at least 500m (1,500 feet) and visibility of not less than 10km", correct: false }
        ]
    },
    {
        question: "Unless otherwise authorized by the authority, no pilot operating an aircraft in commercial air transport operations may accept a clearance to take off from a civil airport under IFR unless weather conditions are at or above:",
        choices: [
            { text: "For aircraft other than helicopters, having two engines or less 1,500m (1 statute mile) visibility", correct: true },
            { text: "For aircraft having more than two engines 800m (1/2 statute mile) visibility", correct: true },
            { text: "For helicopters 1,000m (1 statute mile) visibility", correct: false }
        ]
    },
    {
        question: "Where a DH or MDA is applicable, no pilot may operate a civil aircraft at any airport or heliport below the authorized MDA, or continue an approach below the authorized DH unless:",
        choices: [
            { text: "The aircraft is continuously in a position from which a descent to a landing on the intended runway can be made at a normal rate of descent using normal maneuvers", correct: true },
            { text: "The visibility is below the required minimum but the approach is still in progress", correct: false },
            { text: "For commercial air transport operations, a descent rate will allow touchdown to occur within the touchdown zone of the runway of the intended landing", correct: true }
        ]
    },
    {
        question: "In categories of precision approach and landing operations (CAT 1) means:",
        choices: [
            { text: "A precision instrument approach and landing with a decision height not lower than 60m (200 feet) and either visibility not less than 800m or RVR not less than 550m", correct: true },
            { text: "A non-precision approach and landing with a decision height of 150m (500 feet)", correct: false },
            { text: "A visual flight approach with no decision height and unrestricted visibility", correct: false }
        ]
    },
    {
        question: "Except when necessary for takeoff or landing or except by permission from the appropriate authority, a VFR flight shall not be flown:",
        choices: [
            { text: "Over the congested areas of cities, towns or settlements or over an open air assembly of persons at a height less than 300m (1,000ft) above the height obstacle within a radius of 600m from the aircraft", correct: true },
            { text: "At night over any area not visible from the cockpit", correct: false },
            { text: "Above 10,000ft MSL over congested areas", correct: false }
        ]
    },
    {
        question: "No person may operate an aircraft in aerobatic flight:",
        choices: [
            { text: "Over any city, town, or settlement or within the lateral boundaries of the surface areas of class B, C, D, or E airspace designated for an airport", correct: true },
            { text: "Below an altitude of 500 feet above the surface", correct: false },
            { text: "Unless in compliance with any other conditions prescribed by the authority", correct: true }
        ]
    },
    {
        question: "No person may land or takeoff an aircraft under VFR from an aerodrome located within a control zone, or enter the aerodrome traffic zone or traffic pattern airspace unless the:",
        choices: [
            { text: "Reported ceiling is at least 450m (1500ft) and reported ground visibility is at least 5km, or except when a clearance is obtained from ATC", correct: true },
            { text: "Visibility is at least 3km and the ceiling is 1000ft", correct: false },
            { text: "Clearance from ATC is obtained regardless of the ceiling", correct: false }
        ]
    },
    {
        question: "Visual flight rules (VFR) shall not take off or land at an aerodrome within a control zone or enter the aerodrome traffic pattern zone or traffic pattern when:",
        choices: [
            { text: "When the ceiling is less than 450m or 1500ft, and when the ground visibility is less than 5km, or visibility is at least 5km except when a clearance is obtained from ATC ceiling less than 1500ft", correct: true },
            { text: "Visibility is at least 3km and the ceiling is 1000ft", correct: false },
            { text: "A flight plan is filed with ATC", correct: false }
        ]
    },
    {
        question: "When operating an airplane beneath the ceiling within a control zone under special VFR, what minimum distance from clouds and what visibility are required?",
        choices: [
            { text: "Remain clear of clouds and at least 5km visibility", correct: true },
            { text: "Remain clear of clouds and at least 3km visibility", correct: false },
            { text: "Clear of clouds and visibility of at least 2km", correct: false }
        ]
    },
    {
        question: "If the privileges of the CPL are to be exercised at night, 5 hours of night flight time including:",
        choices: [
            { text: "5 takeoffs and 5 landings as PIC", correct: true },
            { text: "10 hours of night flight time", correct: false },
            { text: "Night flight training with an instructor", correct: false }
        ]
    },
    {
        question: "What is the minimum flight visibility for a special VFR flight?",
        choices: [
            { text: "1 statute mile visibility and clear of clouds", correct: true },
            { text: "3 statute miles visibility", correct: false },
            { text: "At least 5 kilometers visibility", correct: false }
        ]
    },
    {
        question: "Ceiling 600ft, visibility 3km; Ceiling 800ft, visibility 5km; Required visibility on instrument flight:",
        choices: [
            { text: "3km visibility and 800ft ceiling for non-precision approach", correct: true },
            { text: "5km visibility and 1000ft ceiling for precision approach", correct: false },
            { text: "3km visibility and 600ft ceiling for precision approach", correct: false }
        ]
    },
    {
        question: "No person may operate an airplane during the day under VFR at an altitude less than:",
        choices: [
            { text: "2500ft on urban areas and 1500ft over sea", correct: true },
            { text: "1000ft over urban areas and 500ft over sea", correct: false },
            { text: "3000ft on urban areas and 2000ft over sea", correct: false }
        ]
    },
    {
        question: "Aerobatic flight minimums:",
        choices: [
            { text: "5km visibility, 1500ft altitude", correct: true },
            { text: "3km visibility, 2000ft altitude", correct: false },
            { text: "3 miles visibility, 1000ft altitude", correct: false }
        ]
    },
    {
        question: "In aircraft converging rules, which statement is correct?",
        choices: [
            { text: "The aircraft having the other to its right has the right of way", correct: true },
            { text: "The faster aircraft has the right of way", correct: false },
            { text: "The aircraft to the left has the right of way", correct: false }
        ]
    },
    {
        question: "An aircraft overtaken should expect to be passed on:",
        choices: [
            { text: "The right", correct: true },
            { text: "The left", correct: false },
            { text: "Above", correct: false }
        ]
    },
    {
        question: "Unless authorized by the appropriate ATC authority, no pilot may operate in VFR flight:",
        choices: [
            { text: "Between sunset and sunrise", correct: true },
            { text: "During low visibility", correct: false },
            { text: "Above 10,000ft", correct: false }
        ]
    },
    {
        question: "The training required for flight crew members qualifying on another type of aircraft type or variant with the same or essentially the same cockpit configuration, due to aircraft type commonality and by defining the differences between the base and variant aircraft, some of these training courses are shorter than a full transition syllabus:",
        choices: [
            { text: "Cross crew qualification", correct: true },
            { text: "Flight type qualification", correct: false },
            { text: "Crew transition training", correct: false }
        ]
    },
    {
        question: "Which category of aircraft must give right of way to all others in normal circumstances?",
        choices: [
            { text: "Airplane", correct: true },
            { text: "Glider", correct: false },
            { text: "Helicopter", correct: false }
        ]
    },
    {
        question: "Flight crew members are required to keep their safety belts and shoulder harnesses fastened during:",
        choices: [
            { text: "Takeoff and landing and when stations", correct: true },
            { text: "All phases of flight", correct: false },
            { text: "Only during turbulence", correct: false }
        ]
    },
    {
        question: "Unless otherwise prescribed by the appropriate ATC authority, a pilot should submit a flight plan to the appropriate ATC facility:",
        choices: [
            { text: "At least 60 minutes before departure or if submitted during flight time, which will ensure its receipt by the appropriate ATC facility at least 10 minutes before the aircraft is estimated to reach the intended point of entry into control area or advisory area", correct: true },
            { text: "At least 30 minutes before departure", correct: false },
            { text: "At least 10 minutes before entering controlled airspace", correct: false }
        ]
    },
    {
        question: "The creation of civil authority of the Philippines was based on:",
        choices: [
            { text: "Civil Aviation Act 9497, March 23, 2008", correct: true },
            { text: "Republic Act 9231", correct: false },
            { text: "Executive Order 321", correct: false }
        ]
    },
    {
        question: "What is the maximum speed below 10,000ft MSL for all aircraft?",
        choices: [
            { text: "250 knots", correct: true },
            { text: "350 knots", correct: false },
            { text: "200 knots", correct: false }
        ]
    },
    {
        question: "The applicant for an instrument rating (airplane) shall hold at least a:",
        choices: [
            { text: "Private pilot", correct: true },
            { text: "Commercial pilot", correct: false },
            { text: "Student pilot", correct: false }
        ]
    },
    {
        question: "Republic Act 9497 is also known as:",
        choices: [
            { text: "Civil Aviation Authority Act / CAAP", correct: true },
            { text: "Aviation Safety Act", correct: false },
            { text: "Airline Operations Act", correct: false }
        ]
    },
    {
        question: "A class 1 medical certificate is required for the issuance:",
        choices: [
            { text: "CPL, ATPL, MPL, Flight Engineer, and Flight Navigator", correct: true },
            { text: "Private pilot", correct: false },
            { text: "Commercial pilots only", correct: false }
        ]
    },
    {
        question: "In accordance with the table under PCARS part 1, the penalty for takeoff below weather minimums is:",
        choices: [
            { text: "60-120", correct: true },
            { text: "30-60", correct: false },
            { text: "120-180", correct: false }
        ]
    },
    {
        question: "In accordance with the table of sanctions under PCARS part 1, the penalty for takeoff in an overloaded aircraft is:",
        choices: [
            { text: "60-120", correct: true },
            { text: "30-60", correct: false },
            { text: "120-180", correct: false }
        ]
    },
    {
        question: "In accordance with the table of sanctions under PCARS part 1, the penalty for deviation from ATC clearance or instruction en route is:",
        choices: [
            { text: "30-90", correct: true },
            { text: "60-120", correct: false },
            { text: "90-150", correct: false }
        ]
    },
    {
        question: "In accordance with the table of sanctions under PCARS part 1, the penalty for deviation from instrument approach procedure is:",
        choices: [
            { text: "30-90 days", correct: true },
            { text: "60-120 days", correct: false },
            { text: "90-180 days", correct: false }
        ]
    },
    {
        question: "In accordance with table of sanction under PCARS part 1, the penalty for landing at wrong airport:",
        choices: [
            { text: "90-180 days", correct: true },
            { text: "30-60 days", correct: false },
            { text: "180-365 days", correct: false }
        ]
    },
    {
        question: "In accordance with table of sanction under PCARS part 1, the penalty for operation of unairworthy aircraft is:",
        choices: [
            { text: "30-180 days", correct: true },
            { text: "60-120 days", correct: false },
            { text: "90-180 days", correct: false }
        ]
    },
    {
        question: "When are flight plans filed?",
        choices: [
            { text: "60 minutes before departure", correct: true },
            { text: "30 minutes before departure", correct: false },
            { text: "Immediately after departure", correct: false }
        ]
    },
    {
        question: "What is the next higher appropriate cruise altitude or flight level from 5,000 ft MSL for VFR flight along an airway whose magnetic course is 180?",
        choices: [
            { text: "6500 ft", correct: true },
            { text: "7000 ft", correct: false },
            { text: "7500 ft", correct: false }
        ]
    },
    {
        question: "For flight planning document distribution and retention for operator engages in commercial air transport, completed flight preparation documents shall be kept by the operator for a period of:",
        choices: [
            { text: "3 months", correct: true },
            { text: "6 months", correct: false },
            { text: "1 year", correct: false }
        ]
    },
    {
        question: "The applicant for CPL (A) shall have completed in airplane not less than 20 hours of cross country flight time as pilot in command including a cross country flight totaling not less than:",
        choices: [
            { text: "540km (300nm)", correct: true },
            { text: "400km (250nm)", correct: false },
            { text: "600km (350nm)", correct: false }
        ]
    },
    {
        question: "No scheduled or any non-scheduled international operator may schedule any flight crew member and no flight crew member may accept an assignment for flight time in commercial flying if that flight crew member's total flight time in all flying will exceed:",
        choices: [
            { text: "30 hours in any 7 consecutive days, 100 hours in any calendar month, 1,000 hours in any calendar year", correct: true },
            { text: "50 hours in any 7 consecutive days, 150 hours in any calendar month", correct: false },
            { text: "40 hours in any 7 consecutive days, 120 hours in any calendar month", correct: false }
        ]
    },
    {
        question: "Name of the two aircraft documents required for all aircraft in operations:",
        choices: [
            { text: "Aircraft registration and airworthiness", correct: true },
            { text: "Aircraft registration and pilot's license", correct: false },
            { text: "Airworthiness and operating manual", correct: false }
        ]
    },
    {
        question: "What is the blood alcohol limit for a person to act as a crew member even if they have not consumed alcohol in the previous 8 hours?",
        choices: [
            { text: "0.04%", correct: true },
            { text: "0.02%", correct: false },
            { text: "0.08%", correct: false }
        ]
    },
    {
        question: "At which age is a pilot prohibited to serve as PIC or co-pilot in domestic commercial air transport?",
        choices: [
            { text: "67", correct: true },
            { text: "65", correct: false },
            { text: "70", correct: false }
        ]
    },
    {
        question: "For aircraft engaged in commercial air transport operations requiring more than one pilot as flight crew members, the AOC holder may use one pilot up to age 65 provided that the other pilot is less than:",
        choices: [
            { text: "60 years old", correct: true },
            { text: "50 years old", correct: false },
            { text: "55 years old", correct: false }
        ]
    },
    {
        question: "The applicant for CPL (A) shall have completed not less than 200 hours of flight time or _____ hours of flight time if completed during an authority approved training course provided for in an approved training organization under part 3:",
        choices: [
            { text: "150 hours", correct: true },
            { text: "100 hours", correct: false },
            { text: "120 hours", correct: false }
        ]
    },
    {
        question: "The applicant for CPL (A) shall have completed in airplane not less than_____ number of cross country flight time as pilot in command including a cross country flight totaling not less than 300 nautical miles in the course of which full stop landings at two different aerodromes:",
        choices: [
            { text: "20 hours", correct: true },
            { text: "10 hours", correct: false },
            { text: "15 hours", correct: false }
        ]
    },
    {
        question: "What is the minimum fuel requirement for VFR flight for turbo jet aircraft during the day?",
        choices: [
            { text: "30 minutes for day VFR, enough fuel to reach destination", correct: true },
            { text: "45 minutes for day VFR", correct: false },
            { text: "1 hour for day VFR", correct: false }
        ]
    },
    {
        question: "If radio failure occurs in VFR while under ATC control, or if VFR conditions are encountered after the failure, each pilot shall:",
        choices: [
            { text: "Continue the flight under VFR, land at the nearest suitable airport, report arrival to ATC by the most expeditious means possible", correct: true },
            { text: "Land immediately at the nearest airport", correct: false },
            { text: "Attempt to restore radio contact and continue the flight", correct: false }
        ]
    },
    {
        question: "Time during which a pilot is piloting an aircraft solely by reference to instruments and without external reference points:",
        choices: [
            { text: "Instrument time / instrument flight", correct: true },
            { text: "Night flight", correct: false },
            { text: "Cross-country flight", correct: false }
        ]
    },
    {
        question: "No person who holds a pilot license under part 2 shall serve as pilot in command on a Philippine registered civil aircraft engaged in international commercial air transport in a single pilot operation if that person has reached his or her:",
        choices: [
            { text: "60 years of age", correct: true },
            { text: "65 years of age", correct: false },
            { text: "55 years of age", correct: false }
        ]
    },
    {
        question: "No person may serve nor may AOC holder use a person as a required PIC in single pilot operation on aircraft engaged in commercial air transport operation if that person has reached his or her:",
        choices: [
            { text: "60th birthday", correct: true },
            { text: "65th birthday", correct: false },
            { text: "55th birthday", correct: false }
        ]
    },
    {
        question: "The applicant for CPL (A) shall not be less than:",
        choices: [
            { text: "18 years old", correct: true },
            { text: "21 years old", correct: false },
            { text: "25 years old", correct: false }
        ]
    },
    {
        question: "When aircraft of the same category are converging at approximately the same altitude (except head-on, nearly so):",
        choices: [
            { text: "The aircraft to the other’s right has the right of way", correct: true },
            { text: "The aircraft to the left has the right of way", correct: false },
            { text: "The faster aircraft has the right of way", correct: false }
        ]
    },
    {
        question: "The Civil Aviation Authority of the Philippines is headed by?",
        choices: [
            { text: "Director General", correct: true },
            { text: "Secretary of Transportation", correct: false },
            { text: "Administrator of Civil Aviation", correct: false }
        ]
    },
    {
        question: "The applicant for CPL (A) shall have completed in airplane not less than:",
        choices: [
            { text: "100 hours as PIC or in the case of a course approved training, 70 hours as PIC", correct: true },
            { text: "120 hours as PIC", correct: false },
            { text: "150 hours as PIC", correct: false }
        ]
    },
    {
        question: "An alternate airport/heliport at which an aircraft can land should this become necessary shortly after takeoff and it is not possible to use the airport/heliport of departure:",
        choices: [
            { text: "Takeoff alternate", correct: true },
            { text: "Enroute alternate", correct: false },
            { text: "Landing alternate", correct: false }
        ]
    },
    {
        question: "At what altitude should all the flight crew members use breathing oxygen continuously?",
        choices: [
            { text: "14,000ft", correct: true },
            { text: "12,000ft", correct: false },
            { text: "10,000ft", correct: false }
        ]
    },
    {
        question: "No person may act as PIC or a co-pilot of an aircraft, within the preceding 90 days unless that pilot has:",
        choices: [
            { text: "Made three takeoffs and landings as the sole manipulator of the flight controls in an aircraft of the same category and class and if a type rating is required of the same type or in flight simulation training device approved for the purpose", correct: true },
            { text: "Flown at least 50 hours as PIC", correct: false },
            { text: "Completed a training course in a flight simulator", correct: false }
        ]
    },
    {
        question: "No person may conduct a special VFR flight operation to enter the traffic pattern, land or takeoff an aircraft under special VFR from an airport located in class B, class C, class D or class E airspace unless:",
        choices: [
            { text: "Authorized by an ATC clearance, under exceptional circumstances, the aircraft remains clear of clouds, and the flight visibility is at least 5km", correct: true },
            { text: "The flight visibility is at least 3km", correct: false },
            { text: "The weather conditions allow flight visibility of 1km", correct: false }
        ]
    },
    {
        question: "No person may continue a flight from an intermediate airport without a new operational flight plan if the aircraft has been on the ground more than:",
        choices: [
            { text: "6 hours", correct: true },
            { text: "4 hours", correct: false },
            { text: "8 hours", correct: false }
        ]
    },
    {
        question: "No person may operate an aircraft in maneuvers exceeding a bank of 60 degrees or pitch of 30 degrees from level flight attitude unless all occupants of the aircraft are wearing parachutes packed by a qualified parachute rigger, licensed in accordance with part 2 of these regulations, in the past 12 calendar months:",
        choices: [
            { text: "Aerobatic flight", correct: true },
            { text: "Training flight", correct: false },
            { text: "Cross-country flight", correct: false }
        ]
    },
    {
        question: "No scheduled and non-scheduled domestic operator may schedule any flight crew member and no flight crew member may accept an assignment for flight time in scheduled air transportation or in other commercial flying if that crew member's total flight time in all commercial flying will exceed:",
        choices: [
            { text: "1,000 hours in any calendar year, 100 hours in any calendar month, 30 hours in any 7 consecutive days, 8 hours between required rest period", correct: true },
            { text: "800 hours in any calendar year", correct: false },
            { text: "1,200 hours in any calendar year", correct: false }
        ]
    },
    {
        question: "No person may act as a pilot under IFR nor in IMC, unless he or she has, within the past six calendar months:",
        choices: [
            { text: "Logged at least six hours of instrument flight time including at least three hours in flight in the category of aircraft", correct: true },
            { text: "Completed at least 10 instrument approaches", correct: false },
            { text: "Completed at least 5 hours of night instrument flight", correct: false }
        ]
    },
    {
        question: "An alternate airport/heliport to which an aircraft may proceed should it become either impossible or inadvisable to land at the airport/heliport of intended landing:",
        choices: [
            { text: "Destination alternate", correct: true },
            { text: "Enroute alternate", correct: false },
            { text: "Takeoff alternate", correct: false }
        ]
    },
    {
        question: "No PIC may allow an airplane to be refueled when passengers are embarking on board or disembarking unless:",
        choices: [
            { text: "The airplane is properly attended by qualified personnel ready to initiate and direct an evacuation of the airplane by the most practical and expeditious means available, and two-way communication is maintained by the aircraft's intercommunication system or other suitable means between the ground crew supervising the refueling and the qualified personnel on board the aircraft", correct: true },
            { text: "The passengers are seated and strapped in", correct: false },
            { text: "The aircraft is positioned near the terminal for safety", correct: false }
        ]
    },
    {
        question: "No person may act as flight operation officer in realizing a scheduled passenger carrying commercial air transport operation unless that person:",
        choices: [
            { text: "Holds a flight operation officer license or an ATP license, is currently qualified with the operator for the operation and type of aircraft used, and when the authority requires that a flight operation officer/flight dispatch", correct: true },
            { text: "Has completed a flight operations officer certification course", correct: false },
            { text: "Has at least 5 years of experience in flight operations", correct: false }
        ]
    },
    {
        question: "A series of white flashes is transmitted from the control tower to an aircraft on the ground. What does it mean?",
        choices: [
            { text: "Return to the starting point", correct: true },
            { text: "Clear for takeoff", correct: false },
            { text: "Taxi to the parking area", correct: false }
        ]
    },
    {
        question: "A co-pilot is required for IFR commercial air transport operations, unless the authority has issued an exemption. This exemption shall be for domestic operations only and airplanes weighing less than 5,700kg or helicopters weighing less than 3,175kg:",
        choices: [
            { text: "Composition of flight crew", correct: true },
            { text: "Authorization of ATC", correct: false },
            { text: "Exemption for non-commercial operations", correct: false }
        ]
    },
    {
        question: "Which incident would require that the nearest CAAP field office be notified immediately?",
        choices: [
            { text: "In-flight fire", correct: true },
            { text: "Minor engine failure", correct: false },
            { text: "Landing gear malfunction", correct: false }
        ]
    },
    {
        question: "An alternate airport/heliport at which an aircraft would be able to land in the event that diversion becomes necessary while enroute:",
        choices: [
            { text: "En route alternate", correct: true },
            { text: "Destination alternate", correct: false },
            { text: "Takeoff alternate", correct: false }
        ]
    },
    {
        question: "The holder of a commercial pilot license shall have the privileges to:",
        choices: [
            { text: "To act as a pilot in command in commercial air transportation in any aircraft having a gross weight of not exceeding 5,700 kilograms (12,500lbs)", correct: true },
            { text: "To act as a pilot in command in any aircraft engaged in operations other than commercial air transportation", correct: false },
            { text: "To fly non-commercially without restrictions", correct: false }
        ]
    },
    {
        question: "Supplemental oxygen for non-pressurized aircraft, the entire flight time at pressure altitude above 10,000 ft need supply for:",
        choices: [
            { text: "All occupants of flight deck seats on flight deck duty", correct: true },
            { text: "Only the pilot", correct: false },
            { text: "Only the crew members", correct: false }
        ]
    },
    {
        question: "CPL (A) applicants require the issuance of _____ medical certificate:",
        choices: [
            { text: "Class 1", correct: true },
            { text: "Class 2", correct: false },
            { text: "Class 3", correct: false }
        ]
    },
    {
        question: "The total flight time of a pilot must not exceed 32 hours in 7 days_____ 1000 hours in a year:",
        choices: [
            { text: "100 hours in a month", correct: true },
            { text: "50 hours in a month", correct: false },
            { text: "150 hours in a month", correct: false }
        ]
    },
    {
        question: "What segment starts from the initial approach fix to an intermediate fix or, if possible, the final approach fix?",
        choices: [
            { text: "Initial approach segment", correct: true },
            { text: "Final approach segment", correct: false },
            { text: "Enroute segment", correct: false }
        ]
    },
    {
        question: "What altitude requires breathing oxygen to be worn at all times?",
        choices: [
            { text: "Above 13,000ft", correct: true },
            { text: "Above 10,000ft", correct: false },
            { text: "Above 8,000ft", correct: false }
        ]
    },
    {
        question: "What privileges can a CPL holder have subject to compliance with the requirements?",
        choices: [
            { text: "To exercise all the privileges of the holder of PPL, to act as PIC in any airplane engaged in operations other than commercial air transportation, to act as PIC in commercial air transportation in any airplane certificated for single pilot operation, to act as a co-pilot in commercial air transportation in airplanes required to be operated with a co-pilot", correct: true },
            { text: "To act as PIC in commercial operations only", correct: false },
            { text: "To fly any aircraft under VFR rules", correct: false }
        ]
    },
    {
        question: "A pilot shall not operate an aircraft carrying passengers as PIC or co-pilot to operate the flight controls of a type or a variant of a type of aircraft during at least 3 takeoffs and landings within the preceding:",
        choices: [
            { text: "90 days", correct: true },
            { text: "180 days", correct: false },
            { text: "60 days", correct: false }
        ]
    },
    {
        question: "What is a sterile cockpit?",
        choices: [
            { text: "When non-essential activities are refrained during the critical phases of flight", correct: true },
            { text: "When all pre-flight checks have been made", correct: false },
            { text: "When the aircraft is in cruise altitude", correct: false }
        ]
    },
    {
        question: "Which fire incident needs CAAP to be notified immediately?",
        choices: [
            { text: "In-flight", correct: true },
            { text: "On the ground", correct: false },
            { text: "During taxi", correct: false }
        ]
    },
    {
        question: "Which of the following require a class 1 medical certificate?",
        choices: [
            { text: "CPL, ATPL, MPL, Flight Engineer, Flight Navigator", correct: true },
            { text: "Private pilot", correct: false },
            { text: "Commercial pilot only", correct: false }
        ]
    },
    {
        question: "At which age is a pilot prohibited to serve as PIC in international commercial air transport in a single pilot operation?",
        choices: [
            { text: "60", correct: true },
            { text: "65", correct: false },
            { text: "55", correct: false }
        ]
    },
    {
        question: "At which age is a pilot prohibited to serve as PIC or co-pilot in international commercial air transport?",
        choices: [
            { text: "65", correct: true },
            { text: "60", correct: false },
            { text: "70", correct: false }
        ]
    },
    {
        question: "Autopilot is required to be used at or above which altitude?",
        choices: [
            { text: "FL200 or 20,000ft", correct: true },
            { text: "FL150 or 15,000ft", correct: false },
            { text: "FL250 or 25,000ft", correct: false }
        ]
    },
    {
        question: "Airbus inspection after 100 hours conditions:",
        choices: [
            { text: "Should not exceed 10 hours", correct: true },
            { text: "Should not exceed 12 hours", correct: false },
            { text: "Should be completed in 8 hours", correct: false }
        ]
    },
    {
        question: "VFR minimums:",
        choices: [
            { text: "Cannot go below 500ft above land or sea and at least 1,000 ft obstacle clearance", correct: true },
            { text: "Cannot go below 1000ft above land or sea", correct: false },
            { text: "Minimum of 200ft above obstacles", correct: false }
        ]
    },
    {
        question: "Night flying required number of touch and gos:",
        choices: [
            { text: "5 touch and gos", correct: true },
            { text: "3 touch and gos", correct: false },
            { text: "10 touch and gos", correct: false }
        ]
    },
    {
        question: "The operation of a base aircraft and variant of the same type, common type related type or a different type by one or more flight crew members, between training or checking events:",
        choices: [
            { text: "Mixed fleet flying", correct: true },
            { text: "Type conversion", correct: false },
            { text: "Cross fleet flying", correct: false }
        ]
    },
    {
        question: "When arriving at an airport, the PIC of a turbojet, turbofan, or large aircraft shall enter the traffic pattern at least 1500ft AGL until further descent is required for landing:",
        choices: [
            { text: "Airport traffic pattern altitudes turbojet, turbofan, or large aircraft", correct: true },
            { text: "3,000ft for jet aircraft", correct: false },
            { text: "1,000ft for small aircraft", correct: false }
        ]
    },
    {
        question: "Applicants for CPL license must complete at least:",
        choices: [
            { text: "20 hours", correct: true },
            { text: "50 hours", correct: false },
            { text: "30 hours", correct: false }
        ]
    },
    {
        question: "For instrument approach operations, no person may use an autopilot at an altitude above the terrain that is less than:",
        choices: [
            { text: "50ft below the MDA or DH", correct: true },
            { text: "100ft below the MDA or DH", correct: false },
            { text: "200ft below the MDA or DH", correct: false }
        ]
    },
    {
        question: "For instrument approach operations (except for CAT II and CAT III operations), no person may use an autopilot at an altitude less than below MDA or DH:",
        choices: [
            { text: "50ft", correct: true },
            { text: "100ft", correct: false },
            { text: "200ft", correct: false }
        ]
    },
    {
        question: "No pilot may act as co-pilot of an aircraft in commercial air transport operations unless he or she holds either:",
        choices: [
            { text: "CPL/IR or an ATPL license, each with applicable category, class and type ratings for the aircraft operated", correct: true },
            { text: "Private pilot license with type rating", correct: false },
            { text: "CPL with the type of aircraft only", correct: false }
        ]
    },
    {
        question: "How far is required in cross-country flights?",
        choices: [
            { text: "540km / 300nm", correct: true },
            { text: "400km / 250nm", correct: false },
            { text: "600km / 350nm", correct: false }
        ]
    },
    {
        question: "In accordance with the table of sanction under PCAR part 1, the penalty for approach below weather minimums is:",
        choices: [
            { text: "45-90 days", correct: true },
            { text: "30-60 days", correct: false },
            { text: "90-120 days", correct: false }
        ]
    },
    {
        question: "Which part of the PCARS prescribes the requirements governing the certification of aviation training organization?",
        choices: [
            { text: "Part 3", correct: true },
            { text: "Part 5", correct: false },
            { text: "Part 7", correct: false }
        ]
    },
    {
        question: "The operator of a civil, state or foreign aircraft shall file a report in the form and manner prescribed by the authority:",
        choices: [
            { text: "Within 10 days after an incident or accident, or after 7 days if an overdue aircraft is still missing", correct: true },
            { text: "Within 24 hours of an incident", correct: false },
            { text: "Within 30 days", correct: false }
        ]
    },
    {
        question: "Aircraft flights under VFR conditions shall have visibility and distance from clouds:",
        choices: [
            { text: "(Day) horizontal 1 mile/vertical 1,000ft", correct: true },
            { text: "(Night) 3sm visibility, 500ft below clouds, 1000ft above clouds and 2,000 horizontal distance from clouds", correct: true },
            { text: "(Day) 2 miles horizontal, 500ft above clouds", correct: false }
        ]
    },
    {
        question: "The supplemental oxygen supply requirements for non-pressurized aircraft if the entire flight time at pressure altitudes above 13,000ft and for any period exceeding 30 minutes at pressure altitudes above 10,000ft but not exceeding 13,000ft:",
        choices: [
            { text: "All required cabin crew members", correct: true },
            { text: "Only the pilot", correct: false },
            { text: "Only passengers above 10,000ft", correct: false }
        ]
    },
    {
        question: "An aircraft overtaken should expect to be passed on:",
        choices: [
            { text: "Right", correct: true },
            { text: "Left", correct: false },
            { text: "Above", correct: false }
        ]
    },
    {
        question: "Entire flight time at pressure altitudes above 13,000ft:",
        choices: [
            { text: "100% of passengers", correct: true },
            { text: "50% of passengers", correct: false },
            { text: "Only flight crew", correct: false }
        ]
    },
    {
        question: "Entire flight time after 30 minutes at pressure altitudes greater than 10,000ft but not exceeding 13,000ft:",
        choices: [
            { text: "10% of passengers", correct: true },
            { text: "50% of passengers", correct: false },
            { text: "All passengers", correct: false }
        ]
    },
    {
        question: "The applicant for CPL shall receive and log not less than:",
        choices: [
            { text: "25 hours of dual instruction from an authorized instructor, including 5 hours completed in flight simulator or flight procedures", correct: true },
            { text: "20 hours of dual instruction from an authorized instructor", correct: false },
            { text: "30 hours of solo flight time", correct: false }
        ]
    },
    {
        question: "If the privileges of CPL (A) are to be exercised at night, the applicant shall have received 4 hours dual instruction in airplanes in night flying, including takeoffs, landings and:",
        choices: [
            { text: "1 hour navigation", correct: true },
            { text: "2 hours navigation", correct: false },
            { text: "No navigation required", correct: false }
        ]
    }
];

// Shuffle function to randomize questions and choices
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Render the quiz dynamically
function renderQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = ""; // Clear previous content

    // Randomize the questions and render them
    shuffle(questions).forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.id = `question-${index + 1}`;

        const questionText = document.createElement('p');
        questionText.innerHTML = `<strong>${index + 1}. ${question.question}</strong>`;
        questionElement.appendChild(questionText);

        const choicesList = document.createElement('ul');
        choicesList.classList.add('choices');
        shuffle(question.choices).forEach((choice, choiceIndex) => {
            const choiceElement = document.createElement('li');
            const radioId = `q${index + 1}a${choiceIndex + 1}`;
            choiceElement.innerHTML = `<input type="radio" id="${radioId}" name="q${index + 1}" value="${choice.correct ? '1' : '0'}" onclick="checkAnswer('q${index + 1}', this)"><label for="${radioId}">${choice.text}</label>`;
            choicesList.appendChild(choiceElement);
        });

        questionElement.appendChild(choicesList);
        const feedbackElement = document.createElement('p');
        feedbackElement.classList.add('feedback');
        feedbackElement.id = `feedback-${index + 1}`;
        questionElement.appendChild(feedbackElement);

        quizContainer.appendChild(questionElement);
    });
}

// Check answers immediately after selecting an option
function checkAnswer(questionId, selected) {
    const feedbackElement = document.getElementById(`feedback-${questionId.slice(1)}`);
    const labels = document.querySelectorAll(`label[for^='${questionId}']`);

    // Remove any existing marks before adding new ones
    labels.forEach(label => {
        label.classList.remove('correct', 'incorrect');
    });

    // Add feedback based on selected answer
    if (selected.value === '1') {
        feedbackElement.textContent = "Correct!";
        selected.parentElement.querySelector('label').classList.add("correct");
    } else {
        feedbackElement.textContent = "Incorrect.";
        selected.parentElement.querySelector('label').classList.add("incorrect");
    }
}

// Reset the quiz
function resetQuiz() {
    // Clear all radio buttons
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);

    // Clear all feedback and remove marks
    const feedbacks = document.querySelectorAll('.feedback');
    const labels = document.querySelectorAll('label');

    feedbacks.forEach(feedback => {
        feedback.textContent = "";
    });

    labels.forEach(label => {
        label.classList.remove("correct", "incorrect");
    });

    // Re-render the quiz with randomized questions and choices
    renderQuiz();
}

// Initial render when the page loads
window.onload = renderQuiz;
