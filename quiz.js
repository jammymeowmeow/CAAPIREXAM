let currentQuestionIndex = 0;
let score = 0; // Score counts only first-time correct answers
let attemptedQuestions = []; // Track which questions have been attempted

// Shuffle settings
let shuffleQuestions = false;
let shuffleChoices = false;

// Question data
const questions = [
    {
                question: "On the taxi check, the magnetic compass should",
                choices: [
                    { text: "swing freely and indicate known headings.", correct: true },
                    { text: "exhibit the same number of degrees of dip as the latitude.", correct: false },
                    { text: "swing opposite to the direction of turn when turning from north.", correct: false }
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
            { text: "Above FL200", correct: true },
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

// DOM Elements
const questionElement = document.querySelector(".question");
const answersElement = document.querySelector(".answers");
const feedbackElement = document.querySelector(".feedback");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const remainingQuestionsText = document.getElementById("remaining-questions");

// Shuffle function to randomize arrays
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

// Update the progress bar and text
function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    const remaining = questions.length - (currentQuestionIndex + 1);
    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress.toFixed(1)}%`; // Display percentage
    remainingQuestionsText.textContent = `Remaining Questions: ${remaining} out of ${questions.length}`;
}

// Display a question
function displayQuestion(index) {
    const currentQuestion = questions[index];
    questionElement.innerHTML = `<strong>${index + 1}. ${currentQuestion.question}</strong>`;
    answersElement.innerHTML = ''; // Clear previous answers
    feedbackElement.textContent = ''; // Clear feedback
    nextButton.disabled = true; // Disable next button initially
    prevButton.disabled = index === 0; // Disable prev button on the first question

    // Shuffle choices if enabled
    const choicesToDisplay = shuffleChoices ? shuffle(currentQuestion.choices) : currentQuestion.choices;

    // Render choices
    choicesToDisplay.forEach((choice) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('answer-button');
        button.addEventListener('click', () => checkAnswer(button, choice, currentQuestion));
        answersElement.appendChild(button);
    });

    // Track attempted questions
    attemptedQuestions[index] = attemptedQuestions[index] || { isCorrect: false, firstAttempt: true };

    updateProgressBar();
}

// Check the answer
function checkAnswer(selectedButton, choice, currentQuestion) {
    const currentAttempt = attemptedQuestions[currentQuestionIndex];

    if (choice.correct) {
        selectedButton.classList.add("correct"); // Highlight correct answer
        feedbackElement.textContent = "Correct! You chose the right answer.";
        nextButton.disabled = false; // Enable Next button

        if (currentAttempt.firstAttempt) {
            score++; // Increment score on first correct attempt
            currentAttempt.isCorrect = true;
        }

        // Disable all buttons
        Array.from(answersElement.children).forEach((button) => button.disabled = true);
    } else {
        selectedButton.classList.add("incorrect"); // Highlight wrong answer
        feedbackElement.textContent = "Incorrect! Please try again.";
        currentAttempt.firstAttempt = false; // Mark as not first attempt
    }
}

// Go to next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion(currentQuestionIndex);
    } else {
        showResult();
    }
}

// Go to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

// Show result
function showResult() {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    questionElement.innerHTML = `<div class="final-score">Quiz Finished! Your final score is: ${score}/${questions.length} (${percentage}%)</div>`;
    answersElement.innerHTML = ''; // Clear answers
    feedbackElement.textContent = '';
    nextButton.style.display = 'none'; // Hide Next button
    prevButton.style.display = 'none'; // Hide Prev button

    // Check if restart button already exists before creating a new one
    if (!document.querySelector('.reset-btn')) {
        // Create Restart button
        const restartButton = document.createElement('button');
        restartButton.textContent = 'Restart Quiz';
        restartButton.classList.add('reset-btn');
        restartButton.addEventListener('click', resetQuiz);
        answersElement.appendChild(restartButton); // Add Restart button
    }
}

// Reset the quiz
function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    attemptedQuestions = []; // Reset attempted questions
    nextButton.style.display = 'inline-block'; // Show Next button
    prevButton.style.display = 'inline-block'; // Show Prev button
    displayQuestion(currentQuestionIndex); // Show first question
}

// Start the quiz and hide the start page
function startQuiz() {
    shuffleQuestions = document.getElementById("shuffle-questions").checked;
    shuffleChoices = document.getElementById("shuffle-choices").checked;

    document.getElementById("start-page").style.display = 'none'; // Hide start page
    document.getElementById("quiz-container").style.display = 'block'; // Show quiz content

    if (shuffleQuestions) shuffle(questions); // Shuffle questions if enabled

    displayQuestion(currentQuestionIndex); // Show first question
}

// Initialize the quiz
window.onload = () => {
    document.getElementById("start-page").style.display = 'block'; // Show start page
};
