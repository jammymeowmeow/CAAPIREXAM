let currentQuestionIndex = 0;
let score = 0; // Score counts only first-time correct answers
let attemptedQuestions = []; // Track which questions have been attempted

// Shuffle settings
let shuffleQuestions = false;
let shuffleChoices = false;

// Question data
const questions = [
    const quizQuestions = [
  {
    question: "On the taxi check, the magnetic compass should",
    choices: [
      { text: "exhibit the same number of degrees of dip as the latitude.", correct: false },
      { text: "swing opposite to the direction of turn when turning from north.", correct: false },
      { text: "swing freely and indicate known headings.", correct: true }
    ]
  },
     {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the left from an east heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will remain on east for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false },
      { text: "The compass will indicate the approximate correct magnetic heading if the roll into the turn is smooth.", correct: true },
      { text: "The compass will initially indicate a turn to the right.", correct: false }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the right from an easterly heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will indicate the approximate correct magnetic heading if the roll into the turn is smooth.", correct: true },
      { text: "The compass will initially indicate a turn to the left.", correct: false },
      { text: "The compass will remain on east for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the right from a south heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will remain on south for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false },
      { text: "The compass will indicate a turn to the right, but at a faster rate than is actually occurring.", correct: true },
      { text: "The compass will initially indicate a turn to the left.", correct: false }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass when you roll into a standard-rate turn to the left from a south heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will initially indicate a turn to the right.", correct: false },
      { text: "The compass will indicate a turn to the left, but at a faster rate than is actually occurring.", correct: true },
      { text: "The compass will remain on south for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the right from a westerly heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will remain on a westerly heading for a short time, then gradually catch up to the actual heading of the aircraft.", correct: false },
      { text: "The compass will initially show a turn in the opposite direction, then turn to a northerly indication but lagging behind the actual heading of the aircraft.", correct: false },
      { text: "The compass will indicate the approximate correct magnetic heading if the roll into the turn is smooth.", correct: true }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the right from a northerly heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will remain on north for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false },
      { text: "The compass will indicate a turn to the right, but at a faster rate than is actually occurring.", correct: false },
      { text: "The compass will initially indicate a turn to the left.", correct: true }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the left from a west heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will remain on west for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false },
      { text: "The compass will initially indicate a turn to the right.", correct: false },
      { text: "The compass will indicate the approximate correct magnetic heading if the roll into the turn is smooth.", correct: true }
    ]
  },
  {
    question: "What should be the indication on the magnetic compass as you roll into a standard-rate turn to the left from a north heading in the Northern Hemisphere?",
    choices: [
      { text: "The compass will initially indicate a turn to the right.", correct: true },
      { text: "The compass will indicate a turn to the left, but at a faster rate than is actually occurring.", correct: false },
      { text: "The compass will remain on north for a short time, then gradually catch up to the magnetic heading of the aircraft.", correct: false }
    ]
  },
  {
    question: "During flight, if the pitot tube becomes clogged with ice, which of the following instruments would be affected?",
    choices: [
      { text: "The airspeed indicator only.", correct: true },
      { text: "The airspeed indicator, altimeter, and vertical speed indicator.", correct: false },
      { text: "The airspeed indicator and the altimeter.", correct: false }
    ]
  },
  {
    question: "If both the ram air input and the drain hole of the pitot system are blocked, what reaction should you observe on the airspeed indicator when power is applied and a climb is initiated out of severe icing conditions?",
    choices: [
      { text: "The airspeed would drop to, and remain at, zero.", correct: false },
      { text: "No change until an actual climb rate is established, then indicated airspeed will increase.", correct: true },
      { text: "The indicated airspeed would show a continuous deceleration while climbing.", correct: false }
    ]
  },
  {
    question: "What indication should a pilot observe if an airspeed indicator ram air input and drain hole are blocked?",
    choices: [
      { text: "No airspeed indicator change will occur during climbs or descents.", correct: false },
      { text: "The airspeed indicator will show a decrease with an increase in altitude.", correct: false },
      { text: "The airspeed indicator will react as an altimeter.", correct: true }
    ]
  },
  {
    question: "If the outside air temperature increases during a flight at constant power and at a constant indicated altitude, the true airspeed will",
    choices: [
      { text: "increase and true altitude will increase.", correct: true },
      { text: "increase and true altitude will decrease.", correct: false },
      { text: "decrease and true altitude will increase.", correct: false }
    ]
  },
  {
    question: "What would be the indication on the VSI during entry into a 500 FPM actual descent from level flight if the static ports were iced over?",
    choices: [
      { text: "The initial indication would be a climb, then descent at a rate in excess of 500 FPM.", correct: false },
      { text: "The indication would be in reverse of the actual rate of descent (500 FPM climb).", correct: false },
      { text: "The VSI pointer would remain at zero regardless of the actual rate of descent.", correct: true }
    ]
  },
  {
    question: "What information does a Mach meter present?",
    choices: [
      { text: "The ratio of aircraft true airspeed to the speed of sound.", correct: true },
      { text: "The ratio of aircraft indicated airspeed to the speed of sound.", correct: false },
      { text: "The ratio of aircraft equivalent airspeed, corrected for installation error, to the speed of sound.", correct: false }
    ]
  },
  {
    question: "How should you preflight check the altimeter prior to an IFR flight?",
    choices: [
      { text: "Set the altimeter first with 29.92\" Hg and then the current altimeter setting. The change in altitude should correspond to the change in setting.", correct: false },
      { text: "Set the altimeter to the current altimeter setting. The indication should be within 75 feet of the actual elevation for acceptable accuracy.", correct: true },
      { text: "Set the altimeter to 29.92\" Hg. With current temperature and the altimeter indication, determine the true altitude to compare with the field elevation.", correct: false }
    ]
  },
  {
    question: "How should you preflight check the altimeter prior to an IFR flight?",
    choices: [
      { text: "Set the altimeter to the current temperature. With current temperature and the altimeter indication, determine the calibrated altitude to compare with the field elevation.", correct: false },
      { text: "Set the altimeter to the current altimeter setting. The indication should be within 75 feet of the actual elevation for acceptable accuracy.", correct: true },
      { text: "Set the altimeter first with 29.92\" Hg and then the current altimeter setting. The change in altitude should correspond to the change in setting.", correct: false }
    ]
  },
  {
    question: "Pressure altitude is the altitude read on your altimeter when the instrument is adjusted to indicate height above",
    choices: [
      { text: "ground level.", correct: false },
      { text: "the standard datum plane.", correct: true },
      { text: "sea level.", correct: false }
    ]
  },
  {
    question: "If you are departing from an airport where you cannot obtain an altimeter setting, you should set your altimeter",
    choices: [
      { text: "on 29.92\" Hg.", correct: false },
      { text: "to the airport elevation.", correct: true },
      { text: "on the current airport barometric pressure, if known.", correct: false }
    ]
  },
  {
    question: "Which altitude is indicated when the altimeter is set to 29.92\" Hg?",
    choices: [
      { text: "Standard.", correct: true },
      { text: "Pressure.", correct: false },
      { text: "Density.", correct: false }
    ]
  },
  {
    question: "The pressure altitude at a given location is indicated on the altimeter after the altimeter is set to",
    choices: [
      { text: "the field elevation.", correct: false },
      { text: "29.92\" Hg.", correct: true },
      { text: "the current altimeter setting.", correct: false }
    ]
  },
  {
    question: "How can you determine the pressure altitude on an airport without a tower or FSS?",
    choices: [
      { text: "Set the altimeter to the current altimeter setting of a station within 100 miles and correct this indicated altitude with local temperature.", correct: false },
      { text: "Use your computer and correct the field elevation for temperature.", correct: false },
      { text: "Set the altimeter to 29.92\" Hg and read the altitude indicated.", correct: true }
    ]
  },
  {
    question: "How can you obtain the pressure altitude on flights below 18,000 feet?",
    choices: [
      { text: "Contact an FSS and ask for the pressure altitude.", correct: false },
      { text: "Use your computer to change the indicated altitude to pressure altitude.", correct: false },
      { text: "Set your altimeter to 29.92\" Hg.", correct: true }
    ]
  },
  {
    question: "At an altitude of 6,500 feet MSL, the current altimeter setting is 30.42\" Hg. The pressure altitude would be approximately",
    choices: [
      { text: "6,000 feet.", correct: true },
      { text: "7,500 feet.", correct: false },
      { text: "6,500 feet.", correct: false }
    ]
  },
  {
    question: "How does a pilot normally obtain the current altimeter setting during an IFR flight in Class E airspace below 18,000 feet?",
    choices: [
      { text: "FSS's along the route broadcast the weather information at 15 minutes past the hour.", correct: false },
      { text: "ATC periodically advises the pilot of the proper altimeter setting.", correct: true },
      { text: "The pilot should contact ARTCC at least every 100 NM and request the altimeter setting.", correct: false }
    ]
  },
  {
    question: "Which of the following defines the type of altitude used when maintaining FL 210?",
    choices: [
      { text: "Pressure.", correct: true },
      { text: "Indicated.", correct: false },
      { text: "Calibrated.", correct: false }
    ]
  },
  {
    question: "What is the procedure for setting the altimeter when assigned an IFR altitude of 18,000 feet or higher on a direct flight off airways?",
    choices: [
      { text: "Set the altimeter to the current reported setting for climb-out and 29.92\" Hg upon reaching 18,000 feet.", correct: true },
      { text: "Set the altimeter to the current altimeter setting until reaching the assigned altitude, then set to 29.92\" Hg.", correct: false },
      { text: "Set the altimeter to 29.92\" Hg before takeoff.", correct: false }
    ]
  },
  {
    question: "While you are flying at FL 250, you hear ATC give an altimeter setting of 28.92\" Hg in your area. At what pressure altitude are you flying?",
    choices: [
      { text: "24,000 feet.", correct: false },
      { text: "25,000 feet.", correct: true },
      { text: "26,000 feet.", correct: false }
    ]
  },
  {
    question: "En route at FL 290, the altimeter is set correctly, but not reset to the local altimeter setting of 30.57\" Hg during descent. If the field elevation is 650 feet and the altimeter is functioning properly, what is the approximate indication upon landing?",
    choices: [
      { text: "715 feet.", correct: false },
      { text: "1,300 feet.", correct: false },
      { text: "Sea level.", correct: true }
    ]
  },
  {
    question: "En route at FL 290, your altimeter is set correctly, but you fail to reset it to the local altimeter setting of 30.26 in. Hg during descent. If the field elevation is 134 feet and your altimeter is functioning properly, what will it indicate after landing?",
    choices: [
      { text: "206 feet below MSL.", correct: true },
      { text: "100 feet MSL.", correct: false },
      { text: "474 feet MSL.", correct: false }
    ]
  },
  {
    question: "Under what condition will true altitude be lower than indicated altitude with an altimeter setting of 29.92\" Hg?",
    choices: [
      { text: "When density altitude is higher than indicated altitude.", correct: false },
      { text: "In warmer than standard air temperature.", correct: false },
      { text: "In colder than standard air temperature.", correct: true }
    ]
  },
  {
    question: "When an altimeter is changed from 30.11\" Hg to 29.96\" Hg, in which direction will the indicated altitude change and by what value?",
    choices: [
      { text: "Altimeter will indicate 150 feet higher.", correct: false },
      { text: "Altimeter will indicate 150 feet lower.", correct: true },
      { text: "Altimeter will indicate 15 feet lower.", correct: false }
    ]
  },
  {
    question: "Which condition would cause the altimeter to indicate a lower altitude than actually flown (true altitude)?",
    choices: [
      { text: "Air temperature warmer than standard.", correct: true },
      { text: "Air temperature lower than standard.", correct: false },
      { text: "Atmospheric pressure lower than standard.", correct: false }
    ]
  },
  {
    question: "Which practical test should be made on the electric gyro instruments prior to starting an engine?",
    choices: [
      { text: "Check that the attitude of the miniature aircraft is wings level before turning on electrical power.", correct: false },
      { text: "Check that the electrical connections are secure on the back of the instruments.", correct: false },
      { text: "Turn on the electrical power and listen for any unusual or irregular mechanical noise.", correct: true }
    ]
  },
  {
    question: "One characteristic that a properly functioning gyro depends upon for operation is the",
    choices: [
      { text: "Deflecting force developed from the angular velocity of the spinning wheel.", correct: false },
      { text: "Ability to resist precession 90° to any applied force.", correct: false },
      { text: "Resistance to deflection of the spinning wheel or disc.", correct: true }
    ]
  },
  {
    question: "What pre-takeoff check should be made of a vacuum-driven heading indicator in preparation for an IFR flight?",
    choices: [
      { text: "After 5 minutes, set the indicator to the magnetic heading of the aircraft and check for proper alignment after taxi turns.", correct: true },
      { text: "Determine that the heading indicator does not precess more than 2° in 5 minutes of ground operation.", correct: false },
      { text: "After 5 minutes, check that the heading indicator card aligns itself with the magnetic heading of the aircraft.", correct: false }
    ]
  },
  {
    question: "What pre-takeoff check should be made of the attitude indicator in preparation for an IFR flight?",
    choices: [
      { text: "The miniature airplane should erect and become stable within 5 minutes.", correct: false },
      { text: "The horizon bar does not vibrate during warmup.", correct: false },
      { text: "The horizon bar should erect and become stable within 5 minutes.", correct: true }
    ]
  },
  {
    question: "Which condition during taxi is an indication that an attitude indicator is unreliable?",
    choices: [
      { text: "The horizon bar tilts more than 5° while making taxi turns.", correct: true },
      { text: "The horizon bar vibrates during warmup.", correct: false },
      { text: "The horizon bar does not align itself with the miniature airplane after warmup.", correct: false }
    ]
  },
  {
    question: "During coordinated turns, which force moves the pendulous vanes of a vacuum-driven attitude indicator resulting in precession of the gyro toward the inside of the turn?",
    choices: [
      { text: "Acceleration.", correct: false },
      { text: "Centrifugal.", correct: true },
      { text: "Deceleration.", correct: false }
    ]
  },
  {
    question: "What indications are displayed by the miniature aircraft of a turn coordinator?",
    choices: [
      { text: "Rate of roll and rate of turn.", correct: true },
      { text: "Direct indication of bank angle and pitch attitude.", correct: false },
      { text: "Indirect indication of bank angle and pitch attitude.", correct: false }
    ]
  },
  {
    question: "If a half-standard-rate turn is maintained, how long would it take to turn 135°?",
    choices: [
      { text: "1 minute 20 seconds.", correct: false },
      { text: "1 minute.", correct: false },
      { text: "1 minute 30 seconds.", correct: true }
    ]
  },
  {
    question: "If a half-standard-rate turn is maintained, how long would it take to turn 360°?",
    choices: [
      { text: "4 minutes.", correct: true },
      { text: "1 minute.", correct: false },
      { text: "2 minutes.", correct: false }
    ]
  },
  {
    question: "If a standard-rate turn is maintained, how long would it take to turn 180°?",
    choices: [
      { text: "3 minutes.", correct: false },
      { text: "1 minute.", correct: true },
      { text: "2 minutes.", correct: false }
    ]
  },
  {
    question: "If a half-standard-rate turn is maintained, how much time would be required to turn clockwise from a heading of 090° to a heading of 180°?",
    choices: [
      { text: "30 seconds.", correct: false },
      { text: "1 minute.", correct: true },
      { text: "1 minute 30 seconds.", correct: false }
    ]
  },
  {
    question: "If a standard-rate turn is maintained, how much time would be required to turn to the right from a heading of 090° to a heading of 270°?",
    choices: [
      { text: "1 minute.", correct: true },
      { text: "3 minutes.", correct: false },
      { text: "2 minutes.", correct: false }
    ]
  },
  {
    question: "Approximately what percent of the indicated vertical speed should be used to determine the number of feet to lead the level-off from a climb to a specific altitude?",
    choices: [
      { text: "10 percent.", correct: true },
      { text: "25 percent.", correct: false },
      { text: "20 percent.", correct: false }
    ]
  },
  {
    question: "To level off from a descent to a specific altitude, the pilot should lead the level-off by approximately",
    choices: [
      { text: "10 percent of the vertical speed.", correct: true },
      { text: "30 percent of the vertical speed.", correct: false },
      { text: "50 percent of the vertical speed.", correct: false }
    ]
  },
  {
    question: "As a rule of thumb, altitude corrections of less than 100 feet should be corrected by using",
    choices: [
      { text: "two bar widths on the attitude indicator.", correct: false },
      { text: "less than a full bar width on the attitude indicator.", correct: true },
      { text: "less than a half bar width on the attitude indicator.", correct: false }
    ]
  },
  {
    question: "Which instruments should be used to make a pitch correction when you have deviated from your assigned altitude?",
    choices: [
      { text: "Attitude indicator, altimeter, and VSI.", correct: true },
      { text: "Altimeter and VSI.", correct: false },
      { text: "Manifold pressure gauge and VSI.", correct: false }
    ]
  },
  {
    question: "To enter a constant-airspeed descent from level-cruising flight, and maintain cruising airspeed, the pilot should",
    choices: [
      { text: "simultaneously reduce power and adjust the pitch using the attitude indicator as a reference to maintain the cruising airspeed.", correct: true },
      { text: "first reduce power, then adjust the pitch using the attitude indicator as a reference to establish a specific rate on the VSI.", correct: false },
      { text: "first adjust the pitch attitude to a descent using the attitude indicator as a reference, then adjust the power to maintain the cruising airspeed.", correct: false }
    ]
  },
  {
    question: "To level off at an airspeed higher than the descent speed, the addition of power should be made, assuming a 500 FPM rate of descent, at approximately",
    choices: [
      { text: "150 to 200 feet above the desired altitude.", correct: false },
      { text: "50 to 100 feet above the desired altitude.", correct: false },
      { text: "100 to 150 feet above the desired altitude.", correct: true }
    ]
  },
  {
    question: "To level off from a descent maintaining the descending airspeed, the pilot should lead the desired altitude by approximately",
    choices: [
      { text: "60 feet.", correct: false },
      { text: "20 feet.", correct: false },
      { text: "50 feet.", correct: true }
    ]
  },
  {
    question: "Which instrument provides the most pertinent information (primary) for bank control in straight-and-level flight?",
    choices: [
      { text: "Heading indicator.", correct: true },
      { text: "Attitude indicator.", correct: false },
      { text: "Turn-and-slip indicator.", correct: false }
    ]
  },
  {
    question: "Which instruments, in addition to the attitude indicator, are pitch instruments?",
    choices: [
      { text: "Altimeter and VSI only.", correct: false },
      { text: "Altimeter, airspeed indicator, and vertical speed indicator.", correct: true },
      { text: "Altimeter and airspeed only.", correct: false }
    ]
  },
  {
    question: "For maintaining level flight at constant thrust, which instrument would be the least appropriate for determining the need for a pitch change?",
    choices: [
      { text: "VSI.", correct: false },
      { text: "Attitude indicator.", correct: true },
      { text: "Altimeter.", correct: false }
    ]
  },
  {
    question: "The gyroscopic heading indicator is inoperative. What is the primary bank instrument in unaccelerated straight-and-level flight?",
    choices: [
      { text: "Attitude indicator.", correct: false },
      { text: "Magnetic compass.", correct: true },
      { text: "Miniature aircraft of turn coordinator.", correct: false }
    ]
  },
  {
    question: "What is the primary pitch instrument during a stabilized climbing left turn at cruise climb airspeed?",
    choices: [
      { text: "Airspeed indicator.", correct: true },
      { text: "Attitude indicator.", correct: false },
      { text: "VSI.", correct: false }
    ]
  },
  {
    question: "When a VOR/DME is collocated under frequency pairings and the VOR portion is inoperative, the DME identifier will repeat at an interval of",
    choices: [
      { text: "60 second intervals at 1350 Hz.", correct: false },
      { text: "20 second intervals at 1020 Hz.", correct: false },
      { text: "30 second intervals at 1350 Hz.", correct: true }
    ]
  },
  {
    question: "The pilot in command of a civil aircraft must have an instrument rating only when operating",
    choices: [
      { text: "under IFR, in weather conditions less than the minimum for VFR flight or in Class A airspace.", correct: true },
      { text: "in weather conditions less than the minimum prescribed for VFR flight.", correct: false },
      { text: "under IFR in positive control airspace.", correct: false }
    ]
  },
  {
    question: "To meet the minimum required instrument flight experience to act as pilot in command of an aircraft under IFR, you must have logged within the preceding 6 calendar months in the same category of aircraft: six instrument approaches,",
    choices: [
      { text: "three of which must be in the same category and class of aircraft to be flown, and 6 hours of instrument time in any aircraft.", correct: false },
      { text: "holding procedures, intercepting and tracking courses through the use of navigation systems.", correct: true },
      { text: "and 6 hours of instrument time in any aircraft.", correct: false }
    ]
  },
  {
    question: "A pilot's recent IFR experience expires on July 1 of this year. What is the latest date the pilot can meet the IFR experience requirement without having to take an instrument proficiency check?",
    choices: [
      { text: "July 31, this year.", correct: false },
      { text: "December 31, this year.", correct: true },
      { text: "June 30, next year.", correct: false }
    ]
  },
  {
    question: "Which limitation is imposed on the holder of a Commercial Pilot Certificate if that person does not hold an instrument rating?",
    choices: [
      { text: "That person is limited to private pilot privileges at night.", correct: false },
      { text: "The carrying of passengers for hire on cross-country flights is limited to 50 NM and the carrying of passengers for hire at night is prohibited.", correct: true },
      { text: "The carrying of passengers or property for hire on cross-country flights at night is limited to a radius of 50 NM.", correct: false }
    ]
  },
  {
    question: "What limitation is imposed on a newly certificated commercial airplane pilot if that person does not hold an instrument pilot rating?",
    choices: [
      { text: "The carrying of passengers or property for hire on cross-country flights at night is limited to a radius of 50 nautical miles (NM).", correct: false },
      { text: "The carrying of passengers for hire on cross-country flights is limited to 50 NM for night flights, but not limited for day flights.", correct: false },
      { text: "The carrying of passengers for hire on cross-country flights is limited to 50 NM and the carrying of passengers for hire at night is prohibited.", correct: true }
    ]
  },
  {
    question: "In addition to a VOR receiver and two-way communications capability, which additional equipment is required for IFR operation in Class B airspace?",
    choices: [
      { text: "Standby communications receiver, DME, and coded transponder.", correct: false },
      { text: "DME and an operable coded transponder having Mode C capability.", correct: false },
      { text: "An operable coded transponder having Mode C capability.", correct: true }
    ]
  },
  {
    question: "What is the required flight visibility and distance from clouds if you are operating in Class E airspace at 9,500 feet MSL with a VFR-on-Top clearance during daylight hours?",
    choices: [
      { text: "3 SM, 1,000 feet above, 500 feet below, and 2,000 feet horizontal.", correct: true },
      { text: "5 SM, 500 feet above, 1,000 feet below, and 2,000 feet horizontal.", correct: false },
      { text: "3 SM, 500 feet above, 1,000 feet below, and 2,000 feet horizontal.", correct: false }
    ]
  },
  {
    question: "What is the minimum flight visibility and distance from clouds for flight at 10,500 feet with a VFR-on-Top clearance during daylight hours? (Class E airspace.)",
    choices: [
      { text: "3 SM, 1,000 feet above, 500 feet below, and 2,000 feet horizontal.", correct: false },
      { text: "5 SM, 1,000 feet above, 500 feet below, and 1 mile horizontal.", correct: false },
      { text: "5 SM, 1,000 feet above, 1,000 feet below, and 1 mile horizontal.", correct: true }
    ]
  },
  {
    question: "What are the minimum fuel requirements in IFR conditions, if the first airport of intended landing is forecast to have a 1,500-foot ceiling and 3 miles visibility at flight-planned ETA? Fuel to fly to the first airport of intended landing,",
    choices: [
      { text: "fly to the alternate, and fly thereafter for 30 minutes at normal cruising speed.", correct: false },
      { text: "fly to the alternate, and fly thereafter for 45 minutes at normal cruising speed.", correct: true },
      { text: "and fly thereafter for 45 minutes at normal cruising speed.", correct: false }
    ]
  },
  {
    question: "During your preflight planning for an IFR flight, you determine that the first airport of intended landing has no instrument approach prescribed in 14 CFR part 97. The weather forecast for one hour before through one hour after your estimated time of arrival is 3,000 ft. scattered with 5 miles visibility. To meet the fuel requirements for this flight, you must be able to fly to the first airport of intended landing,",
    choices: [
      { text: "then to the alternate airport, and then for 45 minutes at normal cruising speed.", correct: true },
      { text: "then to the alternate airport, and then for 30 minutes at normal cruising speed.", correct: false },
      { text: "and then fly for 45 minutes at normal cruising speed.", correct: false }
    ]
  },
  {
    question: "For aircraft other than helicopters, is an alternate airport required for an IFR flight to ATL (Atlanta Hartsfield) if the proposed ETA is 1930Z? TAF KATL 121720Z 121818 20012KT 5SM HZ BKN030 FM2000 3SM TSRA OVC025CB FM2200 33015G20KT P6SM BKN015 OVC040 BECMG 0608 02008KT BKN040 BECMG 1012 00000KT P6SM CLR=",
    choices: [
      { text: "No, because the ceiling and visibility are forecast to be at or above 2,000 feet and 3 miles within 1 hour before to 1 hour after the ETA.", correct: true },
      { text: "No, because the ceiling and visibility are forecast to remain at or above 1,000 feet and 3 miles, respectively.", correct: false },
      { text: "Yes, because the ceiling could fall below 2,000 feet within 2 hours before to 2 hours after the ETA.", correct: false }
    ]
  },
  {
    question: "What minimum weather conditions must be forecast for your ETA at an alternate airport, that has only a VOR approach with standard alternate minimums, for the airport to be listed as an alternate on the IFR flight plan?",
    choices: [
      { text: "800-foot ceiling and 2 statute miles visibility.", correct: true },
      { text: "800-foot ceiling and 1 statute mile visibility.", correct: false },
      { text: "1,000-foot ceiling and visibility to allow descent from minimum en route altitude (MEA), approach, and landing under basic VFR.", correct: false }
    ]
  },
  {
    question: "For aircraft other than helicopters, what minimum conditions must exist at the destination airport to avoid listing an alternate airport on an IFR flight plan when a standard IAP is available?",
    choices: [
      { text: "From 1 hour before to 1 hour after ETA, forecast ceiling 2,000, and visibility 3 miles.", correct: true },
      { text: "From 2 hours before to 2 hours after ETA, forecast ceiling 3,000, and visibility 3 miles.", correct: false },
      { text: "From 2 hours before to 2 hours after ETA, forecast ceiling 2,000, and visibility 2 and ½ miles.", correct: false }
    ]
  },
  {
    question: "What are the minimum weather conditions that must be forecast to list an airport as an alternate when the airport has no approved IAP?",
    choices: [
      { text: "The ceiling and visibility at ETA must allow descent from MEA, approach, and landing, under basic VFR.", correct: true },
      { text: "The ceiling and visibility at ETA, 2,000 feet and 3 miles, respectively.", correct: false },
      { text: "The ceiling and visibility from 2 hours before until 2 hours after ETA, 2,000 feet and 3 miles, respectively.", correct: false }
    ]
  },
  {
    question: "For aircraft other than helicopters, what minimum weather conditions must be forecast for your ETA at an alternate airport that has a precision approach procedure, with standard alternate minimums, in order to list it as an alternate for the IFR flight?",
    choices: [
      { text: "800-foot ceiling and 2 SM visibility at your ETA.", correct: false },
      { text: "600-foot ceiling and 2 SM visibility from 2 hours before to 2 hours after your ETA.", correct: false },
      { text: "600-foot ceiling and 2 SM visibility at your ETA.", correct: true }
    ]
  },
  {
    question: "What are the alternate minimums that must be forecast at the ETA for an airport that has a precision approach procedure?",
    choices: [
      { text: "400-foot ceiling and 2 miles visibility.", correct: false },
      { text: "800-foot ceiling and 2 miles visibility.", correct: false },
      { text: "600-foot ceiling and 2 miles visibility.", correct: true }
    ]
  },
  {
    question: "An airport without an authorized IAP may be included on an IFR flight plan as an alternate, if the current weather forecast indicates that the ceiling and visibility at the ETA will",
    choices: [
      { text: "allow for a descent from the MEA, approach, and a landing under basic VFR conditions.", correct: true },
      { text: "be at least 1,000 feet and 1 mile.", correct: false },
      { text: "allow for descent from the IAF to landing under basic VFR conditions.", correct: false }
    ]
  },
  {
    question: "When an alternate airport is required, what are the weather minimums that must be forecast at the ETA for an alternate airport that has a precision approach procedure?",
    choices: [
      { text: "600 foot ceiling and 2 statute miles visibility.", correct: true },
      { text: "Ceiling 200 feet above field elevation and visibility 1 statute mile, but not less than the minimum visibility for the approach.", correct: false },
      { text: "Ceiling 200 feet above the approach minimums and at least 1 statute mile visibility, but not less than the minimum visibility for the approach.", correct: false }
    ]
  },
  {
    question: "In the 48 contiguous states, excluding the airspace at or below 2,500 feet AGL, an operable coded transponder equipped with Mode C capability is required in all controlled airspace at and above",
    choices: [
      { text: "12,500 feet MSL.", correct: false },
      { text: "10,000 feet MSL.", correct: true },
      { text: "Flight level (FL) 180.", correct: false }
    ]
  },
  {
    question: "A coded transponder equipped with altitude reporting capability is required in all controlled airspace",
    choices: [
      { text: "at and above 10,000 feet MSL, excluding at and below 2,500 feet AGL.", correct: true },
      { text: "below 10,000 feet MSL, excluding at and below 2,500 feet AGL.", correct: false },
      { text: "at and above 2,500 feet above the surface.", correct: false }
    ]
  },
  {
    question: "Which type of runway lighting consists of a pair of synchronized flashing lights, one on each side of the runway threshold?",
    choices: [
      { text: "HIRL.", correct: false },
      { text: "REIL.", correct: true },
      { text: "RAIL.", correct: false }
    ]
  },
  {
    question: "Which runway marking indicates a displaced threshold on an instrument runway?",
    choices: [
      { text: "Centerline dashes starting at the threshold.", correct: false },
      { text: "Red chevron marks in the nonlanding portion of the runway.", correct: false },
      { text: "Arrows leading to the threshold mark.", correct: true }
    ]
  },
  {
    question: "The 'runway hold position' sign denotes",
    choices: [
      { text: "intersecting runways.", correct: false },
      { text: "an area protected for an aircraft approaching a runway.", correct: false },
      { text: "an entrance to runway from a taxiway.", correct: true }
    ]
  },
  {
    question: "'Runway hold position' markings on the taxiway",
    choices: [
      { text: "allows an aircraft permission onto the runway.", correct: false },
      { text: "identifies area where aircraft are prohibited.", correct: false },
      { text: "identifies where aircraft hold short of the runway.", correct: true }
    ]
  },
  {
    question: "The 'No Entry' sign identifies",
    choices: [
      { text: "the exit boundary for the runway protected area.", correct: false },
      { text: "an area that does not continue beyond intersection.", correct: false },
      { text: "paved area where aircraft entry is prohibited.", correct: true }
    ]
  },
  {
    question: "Which approach and landing objective is assured when the pilot remains on the proper glidepath of the VASI?",
    choices: [
      { text: "Safe obstruction clearance in the approach area.", correct: true },
      { text: "Course guidance from the visual descent point to touchdown.", correct: false },
      { text: "Continuation of course guidance after transition to VFR.", correct: false }
    ]
  },
  {
    question: "If an approach is being made to a runway that has an operating 3-bar VASI and all the VASI lights appear red as the airplane reaches the MDA, the pilot should",
    choices: [
      { text: "start a climb to reach the proper glidepath.", correct: false },
      { text: "level off momentarily to intercept the proper approach path.", correct: true },
      { text: "continue at the same rate of descent if the runway is in sight.", correct: false }
    ]
  },
  {
    question: "Tricolor Visual Approach Indicators normally consist of",
    choices: [
      { text: "a single unit, projecting a three-color visual approach path.", correct: true },
      { text: "three separate light units, each projecting a different color approach path.", correct: false },
      { text: "three separate light projecting units of very high candle power with a daytime range of approximately 5 miles.", correct: false }
    ]
  },
  {
    question: "Which is a feature of the tricolor VASI?",
    choices: [
      { text: "One light projector with three colors: red, green, and amber.", correct: true },
      { text: "Three glidepaths, with the center path indicated by a white light.", correct: false },
      { text: "Two visual glidepaths for the runway.", correct: false }
    ]
  },
  {
    question: "What wind condition prolongs the hazards of wake turbulence on a landing runway for the longest period of time?",
    choices: [
      { text: "Direct headwind.", correct: false },
      { text: "Direct tailwind.", correct: false },
      { text: "Light quartering tailwind.", correct: true }
    ]
  },
  {
    question: "What effect would a light crosswind of approximately 7 knots have on vortex behavior?",
    choices: [
      { text: "The upwind vortex would tend to remain over the runway.", correct: true },
      { text: "The light crosswind would rapidly dissipate vortex strength.", correct: false },
      { text: "The downwind vortex would tend to remain over the runway.", correct: false }
    ]
  },
  {
    question: "Which procedure is recommended while climbing to an assigned altitude on the airway?",
    choices: [
      { text: "Climb slightly on the right side of the airway when in VFR conditions.", correct: false },
      { text: "Climb far enough to the right side of the airway to avoid climbing or descending traffic coming from the opposite direction if in VFR conditions.", correct: false },
      { text: "Climb on the centerline of the airway except when maneuvering to avoid other air traffic in VFR conditions.", correct: true }
    ]
  },
  {
    question: "What is expected of you as pilot on an IFR flight plan if you are descending or climbing in VFR conditions?",
    choices: [
      { text: "Execute gentle banks, left and right, at a frequency which permits continuous visual scanning of the airspace about you.", correct: true },
      { text: "If on an airway, climb or descend to the right of the centerline.", correct: false },
      { text: "Advise ATC you are in visual conditions and will remain a short distance to the right of the centerline while climbing.", correct: false }
    ]
  },
  {
    question: "When is a pilot on an IFR flight plan responsible for avoiding other aircraft?",
    choices: [
      { text: "At all times when not in radar contact with ATC.", correct: false },
      { text: "Only when advised by ATC.", correct: false },
      { text: "When weather conditions permit, regardless of whether operating under IFR or VFR.", correct: true }
    ]
  },
  {
    question: "What responsibility does the pilot in command of an IFR flight assume upon entering VFR conditions?",
    choices: [
      { text: "Use VFR operating procedures.", correct: false },
      { text: "Report VFR conditions to ARTCC so that an amended clearance may be issued.", correct: false },
      { text: "To see and avoid other traffic.", correct: true }
    ]
  },
  {
    question: "The most current en route and destination flight information for planning an instrument flight should be obtained from",
    choices: [
      { text: "the ATIS broadcast.", correct: false },
      { text: "the FSS.", correct: true },
      { text: "Notices to Airmen (Class II).", correct: false }
    ]
  },
  {
    question: "From what source can you obtain the latest FDC NOTAM's?",
    choices: [
      { text: "FAA AFSS/FSS.", correct: true },
      { text: "Airport/Facility Directory.", correct: false },
      { text: "Notices to Airmen Publication.", correct: false }
    ]
  },
  {
    question: "When are ATIS broadcasts updated?",
    choices: [
      { text: "Upon receipt of any official weather, regardless of content change or reported values.", correct: true },
      { text: "Every 30 minutes if weather conditions are below basic VFR; otherwise, hourly.", correct: false },
      { text: "Only when the ceiling and/or visibility changes by a reportable value.", correct: false }
    ]
  },
  {
    question: "Absence of the sky condition and visibility on an ATIS broadcast specifically implies that",
    choices: [
      { text: "the ceiling is more than 5,000 feet and visibility is 5 miles or more.", correct: true },
      { text: "the sky condition is clear and visibility is unrestricted.", correct: false },
      { text: "the ceiling is at least 3,000 feet and visibility is 5 miles or more.", correct: false }
    ]
  },
  {
    question: "(Refer to figure 1.) Which item(s) should be checked in block 1 for a composite flight plan?",
    choices: [
      { text: "IFR with an explanation in block 11.", correct: false },
      { text: "VFR and IFR.", correct: true },
      { text: "VFR with an explanation in block 11.", correct: false }
    ]
  },
  {
    question: "(Refer to figure 1.) Which equipment determines the code to be entered in block 3 as a suffix to aircraft type on the flight plan form?",
    choices: [
      { text: "DME, transponder, and RNAV.", correct: true },
      { text: "DME, ADF, and airborne radar.", correct: false },
      { text: "DME, transponder, and ADF.", correct: false }
    ]
  },
  {
    question: "(Refer to figure 1.) What information should be entered in block 7 of an IFR flight plan if the flight has three legs, each at a different altitude?",
    choices: [
      { text: "Altitude for first leg and highest altitude.", correct: false },
      { text: "Highest altitude.", correct: false },
      { text: "Altitude for first leg.", correct: true }
    ]
  },
  {
    question: "(Refer to figure 1.) The time entered in block 12 for an IFR flight should be based on which fuel quantity?",
    choices: [
      { text: "Total useable fuel on board.", correct: true },
      { text: "Total fuel required for the flight.", correct: false },
      { text: "The amount of fuel required to fly to the destination airport, then to the alternate, plus a 45-minute reserve.", correct: false }
    ]
  },
  {
    question: "What point at the destination should be used to compute estimated time en route on an IFR flight plan?",
    choices: [
      { text: "The final approach fix on the expected instrument approach.", correct: false },
      { text: "The initial approach fix on the expected instrument approach.", correct: false },
      { text: "The point of first intended landing.", correct: true }
    ]
  },
  {
    question: "When may a pilot file a composite flight plan?",
    choices: [
      { text: "When requested or advised by ATC.", correct: false },
      { text: "Any time a landing is planned at an intermediate airport.", correct: false },
      { text: "Any time a portion of the flight will be VFR.", correct: true }
    ]
  },
  {
    question: "When filing a composite flight plan where the first portion of the flight is IFR, which fix(es) should be indicated on the flight plan form?",
    choices: [
      { text: "Only those compulsory reporting points on the IFR route segment.", correct: false },
      { text: "Only the fix where you plan to terminate the IFR portion of the flight.", correct: false },
      { text: "All points of transition from one airway to another, fixes defining direct route segments, and the clearance limit fix.", correct: true }
    ]
  },
  {
    question: "What is the recommended procedure for transitioning from VFR to IFR on a composite flight plan?",
    choices: [
      { text: "Prior to transitioning to IFR, contact the nearest FSS, close the VFR portion, and request ATC clearance.", correct: true },
      { text: "Upon reaching the proposed point for change to IFR, contact the nearest FSS and cancel your VFR flight plan, then contact ARTCC and request an IFR clearance.", correct: false },
      { text: "Prior to reaching the proposed point for change to IFR, contact ARTCC, request your IFR clearance, and instruct them to cancel the VFR flight plan.", correct: false }
    ]
  },
  {
    question: "How is your flight plan closed when your destination airport has IFR conditions and there is no control tower or flight service station (FSS) on the field?",
    choices: [
      { text: "The ARTCC controller will close your flight plan when you report the runway in sight.", correct: false },
      { text: "Upon landing, you must close your flight plan by radio or by telephone to any FSS or ATC facility.", correct: true },
      { text: "You may close your flight plan any time after starting the approach by contacting any FSS or ATC facility.", correct: false }
    ]
  },
  {
    question: "What response is expected when ATC issues an IFR clearance to pilots of airborne aircraft?",
    choices: [
      { text: "Read back those parts containing altitude assignments or vectors and any part requiring verification.", correct: true },
      { text: "Read back the entire clearance as required by regulation.", correct: false },
      { text: "Read-back should be unsolicited and spontaneous to confirm that the pilot understands all instructions.", correct: false }
    ]
  },
  {
    question: "Which clearance items are always given in an abbreviated IFR departure clearance? (Assume radar environment.)",
    choices: [
      { text: "Clearance limit, DP Name, Number, and/or Transition, if appropriate.", correct: false },
      { text: "Destination airport, altitude, DP Name, Number, and/or Transition, if appropriate.", correct: true },
      { text: "Altitude, destination airport, and one or more fixes which identify the initial route of flight.", correct: false }
    ]
  },
  {
    question: "An abbreviated departure clearance '...CLEARED AS FILED...' will always contain the name",
    choices: [
      { text: "of the destination airport filed in the flight plan.", correct: true },
      { text: "of the first compulsory reporting point if not in a radar environment.", correct: false },
      { text: "and number of the STAR to be flown when filed in the flight plan.", correct: false }
    ]
  },
  {
    question: "When departing from an airport not served by a control tower, the issuance of a clearance containing a void time indicates that",
    choices: [
      { text: "ATC will assume the pilot has not departed if no transmission is received before the void time.", correct: false },
      { text: "ATC will protect the airspace only to the void time.", correct: false },
      { text: "The pilot must advise ATC as soon as possible, but no later than 30 minutes, of their intentions if not off by the void time.", correct: true }
    ]
  },
  {
    question: "What is the significance of an ATC clearance which reads '...CRUISE SIX THOUSAND...?'",
    choices: [
      { text: "The pilot must maintain 6,000 until reaching the IAF serving the destination airport, then execute the published approach procedure.", correct: false },
      { text: "It authorizes a pilot to conduct flight at any altitude from minimum IFR altitude up to and including 6,000.", correct: true },
      { text: "The pilot is authorized to conduct flight at any altitude from minimum IFR altitude up to and including 6,000, but each change in altitude must be reported to ATC.", correct: false }
    ]
  },
  {
    question: "What is the significance of an ATC clearance which reads '...CRUISE SIX THOUSAND...?'",
    choices: [
      { text: "The pilot may utilize any altitude from the MEA/MOCA to 6,000 feet, but each change in altitude must be reported to ATC.", correct: false },
      { text: "The pilot must maintain 6,000 feet until reaching the IAF serving the destination airport, then execute the published approach procedure.", correct: false },
      { text: "Climbs may be made to, or descents made from, 6,000 feet at the pilot's discretion.", correct: true }
    ]
  },
  {
    question: "A 'CRUISE FOUR THOUSAND FEET' clearance would mean that the pilot is authorized to",
    choices: [
      { text: "climb to, but not descend from 4,000 feet, without further ATC clearance.", correct: false },
      { text: "use any altitude from minimum IFR to 4,000 feet, but must report leaving each altitude.", correct: false },
      { text: "vacate 4,000 feet without notifying ATC.", correct: true }
    ]
  },
  {
    question: "During a takeoff into IFR conditions with low ceilings, when should the pilot contact departure control?",
    choices: [
      { text: "When advised by the tower.", correct: true },
      { text: "Before penetrating the clouds.", correct: false },
      { text: "Upon completing the first turn after takeoff or upon establishing cruise climb on a straight-out departure.", correct: false }
    ]
  },
  {
    question: "To comply with ATC instructions for altitude changes of more than 1,000 feet, what rate of climb or descent should be used?",
    choices: [
      { text: "As rapidly as practicable to 500 feet above/below the assigned altitude, and then at 500 feet per minute until the assigned altitude is reached.", correct: false },
      { text: "As rapidly as practicable to 1,000 feet above/below the assigned altitude, and then between 500 and 1,500 feet per minute until reaching the assigned altitude.", correct: true },
      { text: "1,000 feet per minute during climb and 500 feet per minute during descents until reaching the assigned altitude.", correct: false }
    ]
  },
  {
    question: "When ATC has not imposed any climb or descent restrictions and aircraft are within 1,000 feet of assigned altitude, pilots should attempt to both climb and descend at a rate of between",
    choices: [
      { text: "500 feet per minute and 1,000 feet per minute.", correct: false },
      { text: "500 feet per minute and 1,500 feet per minute.", correct: true },
      { text: "1,000 feet per minute and 2,000 feet per minute.", correct: false }
    ]
  },
  {
    question: "Which report should be made to ATC without a specific request when not in radar contact?",
    choices: [
      { text: "Entering instrument meteorological conditions.", correct: false },
      { text: "Correcting an E.T.A. any time a previous E.T.A. is in error in excess of 2 minutes.", correct: false },
      { text: "When leaving final approach fix inbound on final approach.", correct: true }
    ]
  },
  {
    question: "For IFR planning purposes, what are the compulsory reporting points when using VOR/DME or VORTAC fixes to define a direct route not on established airways?",
    choices: [
      { text: "Fixes selected to define the route.", correct: true },
      { text: "There are no compulsory reporting points unless advised by ATC.", correct: false },
      { text: "At the changeover points.", correct: false }
    ]
  },
  {
    question: "What does the ATC term 'Radar Contact' signify?",
    choices: [
      { text: "You will be given traffic advisories until advised the service has been terminated or that radar contact has been lost.", correct: false },
      { text: "Your aircraft has been identified and you will receive separation from all aircraft while in contact with this radar facility.", correct: false },
      { text: "Your aircraft has been identified on the radar display and radar flight-following will be provided until radar identification is terminated.", correct: true }
    ]
  },
  {
    question: "What is meant when departure control instructs you to 'resume own navigation' after you have been vectored to a Victor airway?",
    choices: [
      { text: "Radar service is terminated.", correct: false },
      { text: "You are still in radar contact, but must make position reports.", correct: false },
      { text: "You should maintain the airway by use of your navigation equipment.", correct: true }
    ]
  },
  {
    question: "When are you required to establish communications with the tower (Class D airspace), if you cancel your IFR flight plan 10 miles from the destination?",
    choices: [
      { text: "When advised by ARTCC.", correct: false },
      { text: "Before entering Class D airspace.", correct: true },
      { text: "Immediately after canceling the flight plan.", correct: false }
    ]
  },
  {
    question: "If a control tower and an FSS are located on the same airport, which function is provided by the FSS during those periods when the tower is closed?",
    choices: [
      { text: "Approach control services.", correct: false },
      { text: "Airport Advisory Service.", correct: true },
      { text: "Automatic closing of the IFR flight plan.", correct: false }
    ]
  },
  {
    question: "Which service is provided for IFR arrivals by a FSS located on an airport without a control tower?",
    choices: [
      { text: "Automatic closing of the IFR flight plan.", correct: false },
      { text: "All functions of approach control.", correct: false },
      { text: "Airport advisories.", correct: true }
    ]
  },
  {
    question: "What does declaring 'minimum fuel' to ATC imply?",
    choices: [
      { text: "Emergency handling is required to the nearest useable airport.", correct: false },
      { text: "Traffic priority is needed to the destination airport.", correct: false },
      { text: "Merely an advisory that indicates an emergency situation is possible should any undue delay occur.", correct: true }
    ]
  },
  {
    question: "You enter a holding pattern (at a fix that is not the same as the approach fix) with an EFC time of 1530. At 1520 you experience complete two-way communications failure. Which procedure should you follow to execute the approach to a landing?",
    choices: [
      { text: "Depart the holding fix to arrive at the approach fix as close as possible to the EFC time and complete the approach.", correct: false },
      { text: "Depart the holding fix at the EFC time, and complete the approach.", correct: true },
      { text: "Depart the holding fix at the earliest of the flight planned ETA or the EFC time, and complete the approach.", correct: false }
    ]
  },
  {
    question: "Which procedure should you follow if you experience two-way communications failure while holding at a holding fix with an EFC time? (The holding fix is not the same as the approach fix.)",
    choices: [
      { text: "Depart the holding fix to arrive at the approach fix as close as possible to the EFC time.", correct: false },
      { text: "Depart the holding fix at the EFC time.", correct: true },
      { text: "Proceed immediately to the approach fix and hold until EFC.", correct: false }
    ]
  },
  {
    question: "You are in IMC and have two-way radio communications failure. If you do not exercise emergency authority, what procedure are you expected to follow?",
    choices: [
      { text: "Set transponder to code 7700 for 1 minute, then to 7600, and fly to an area with VFR weather conditions.", correct: false },
      { text: "Set transponder to 7700 and fly to an area where you can let down in VFR conditions.", correct: false },
      { text: "Set transponder to code 7600, continue flight on assigned route and fly at the last assigned altitude or the MEA, whichever is higher.", correct: true }
    ]
  },
  {
    question: "What altitude and route should be used if you are flying in IMC and have two-way radio communications failure?",
    choices: [
      { text: "Continue on the route specified in your clearance, fly at an altitude that is the highest of last assigned altitude, altitude ATC has informed you to expect, or the MEA.", correct: true },
      { text: "Descend to MEA and, if clear of clouds, proceed to the nearest appropriate airport. If not clear of clouds, maintain the highest of the MEA's along the clearance route.", correct: false },
      { text: "Fly direct to an area that has been forecast to have VFR conditions, fly at an altitude that is at least 1,000 feet above the highest obstacles along the route.", correct: false }
    ]
  },
  {
    question: "Which procedure should you follow if, during an IFR flight in VFR conditions, you have two-way radio communications failure?",
    choices: [
      { text: "Continue the flight under VFR and land as soon as practicable.", correct: true },
      { text: "Continue the flight at assigned altitude and route, start approach at your ETA, or, if late, start approach upon arrival.", correct: false },
      { text: "Land at the nearest airport that has VFR conditions.", correct: false }
    ]
  },
  {
    question: "While flying on an IFR flight plan, you experience two-way communications radio failure while in VFR conditions. In this situation, you should continue your flight under",
    choices: [
      { text: "IFR and maintain the last assigned route and altitude to your flight plan destination.", correct: false },
      { text: "VFR and land as soon as practicable.", correct: true },
      { text: "VFR and proceed to your flight plan destination.", correct: false }
    ]
  },
  {
    question: "What action should you take if your DME fails at FL 240?",
    choices: [
      { text: "Advise ATC of the failure and land at the nearest available airport where repairs can be made.", correct: false },
      { text: "Notify ATC of the failure and continue to the next airport of intended landing where repairs can be made.", correct: true },
      { text: "Notify ATC that it will be necessary for you to go to a lower altitude, since your DME has failed.", correct: false }
    ]
  },
  {
    question: "What is the procedure when the DME malfunctions at or above 24,000 feet MSL?",
    choices: [
      { text: "Notify ATC immediately and request an altitude below 24,000 feet.", correct: false },
      { text: "Continue to your destination in VFR conditions and report the malfunction.", correct: false },
      { text: "After immediately notifying ATC, you may continue to the next airport of intended landing where repairs can be made.", correct: true }
    ]
  },
  {
    question: "What action should you take if your No. 1 VOR receiver malfunctions while operating in controlled airspace under IFR? Your aircraft is equipped with two VOR receivers. The No. 1 receiver has Omni/Localizer/Glide Slope capability, and the No. 2 receiver has only VOR/Localizer capability.",
    choices: [
      { text: "Report the malfunction immediately to ATC.", correct: true },
      { text: "Continue the approach and request a VOR or NDB approach.", correct: false },
      { text: "Continue the flight as cleared; no report is required.", correct: false }
    ]
  },
  {
    question: "Which types of airspace are depicted on the En Route Low Altitude Chart?",
    choices: [
      { text: "Special use airspace, Class E, Class D, Class A, Class B, and Class C.", correct: false },
      { text: "Limits of controlled airspace, military training routes, and special use airspace.", correct: true },
      { text: "Class A, special use airspace, Class D, and Class E.", correct: false }
    ]
  },
  {
    question: "Which airspace is defined as a transition area when designated in conjunction with an airport which has a prescribed IAP?",
    choices: [
      { text: "That Class D airspace extending from the surface and terminating at the base of the continental control area.", correct: false },
      { text: "The Class E airspace extending upward from 700 feet or more above the surface and terminating at the base of the overlying controlled airspace.", correct: true },
      { text: "The Class C airspace extending from the surface to 700 or 1,200 feet AGL, where designated.", correct: false }
    ]
  },
  {
    question: "What are the vertical limits of a transition area that is designated in conjunction with an airport having a prescribed IAP?",
    choices: [
      { text: "1,200 feet AGL to the base of the overlying controlled airspace.", correct: false },
      { text: "700 feet AGL or more to the base of the overlying controlled airspace.", correct: true },
      { text: "Surface to 700 feet AGL.", correct: false }
    ]
  },
  {
    question: "MOAs are established to",
    choices: [
      { text: "separate certain military activities from IFR traffic.", correct: true },
      { text: "prohibit all civil aircraft because of hazardous or secret activities.", correct: false },
      { text: "restrict civil aircraft during periods of high-density training activities.", correct: false }
    ]
  },
  {
    question: "(Refer to figure 93.) What is the floor of Class A airspace?",
    choices: [
      { text: "10,000 feet MSL.", correct: false },
      { text: "18,000 feet MSL.", correct: true },
      { text: "14,500 feet MSL.", correct: false }
    ]
  },
  {
    question: "What are the main differences between the SDF and the localizer of an ILS?",
    choices: [
      { text: "The SDF course may not be aligned with the runway and the course may be wider.", correct: true },
      { text: "The useable off-course indications are limited to 35° for the localizer and up to 90° for the SDF.", correct: false },
      { text: "The course width for the localizer will always be 5° while the SDF course will be between 6° and 12°.", correct: false }
    ]
  },
  {
    question: "How wide is an SDF course?",
    choices: [
      { text: "Either 6° or 12°.", correct: true },
      { text: "Varies from 5° to 10°.", correct: false },
      { text: "Either 3° or 6°.", correct: false }
    ]
  },
  {
    question: "If an early missed approach is initiated before reaching the MAP, the following procedure should be used unless otherwise cleared by ATC.",
    choices: [
      { text: "Begin a climbing turn immediately and follow missed approach procedures.", correct: false },
      { text: "Maintain altitude and continue past MAP for 1 minute or 1 mile whichever occurs first.", correct: false },
      { text: "Proceed to the missed approach point at or above the MDA or DH before executing a turning maneuver.", correct: true }
    ]
  },
  {
    question: "If the pilot loses visual reference while circling to land from an instrument approach and ATC radar service is not available, the missed approach action should be to",
    choices: [
      { text: "make a climbing turn toward the landing runway and continue the turn until established on the missed approach course.", correct: true },
      { text: "execute a climbing turn to parallel the published final approach course and climb to the initial approach altitude.", correct: false },
      { text: "climb to the published circling minimums then proceed direct to the final approach fix.", correct: false }
    ]
  },
  {
    question: "If all ILS components are operating and the required visual references are not established, the missed approach should be initiated upon",
    choices: [
      { text: "arrival at the DH on the glide slope.", correct: true },
      { text: "expiration of the time listed on the approach chart for missed approach.", correct: false },
      { text: "arrival at the middle marker.", correct: false }
    ]
  },
  {
    question: "If during an ILS approach in IFR conditions, the approach lights are not visible upon arrival at the DH, the pilot is",
    choices: [
      { text: "required to immediately execute the missed approach procedure.", correct: true },
      { text: "permitted to continue the approach to the approach threshold of the ILS runway.", correct: false },
      { text: "permitted to continue the approach and descend to the localizer MDA.", correct: false }
    ]
  },
  {
    question: "Approximately what height is the glide slope centerline at the MM of a typical ILS?",
    choices: [
      { text: "200 feet.", correct: true },
      { text: "100 feet.", correct: false },
      { text: "300 feet.", correct: false }
    ]
  },
  {
    question: "Which range facility associated with the ILS is identified by the last two letters of the localizer identification group?",
    choices: [
      { text: "Middle compass locator.", correct: true },
      { text: "Outer marker.", correct: false },
      { text: "Inner marker.", correct: false }
    ]
  },
  {
    question: "Which substitution is permitted when an ILS component is inoperative?",
    choices: [
      { text: "ADF or VOR bearings which cross either the outer or middle marker sites may be substituted for these markers.", correct: false },
      { text: "A compass locator or precision radar may be substituted for the ILS outer or middle marker.", correct: true },
      { text: "DME, when located at the localizer antenna site, should be substituted for the outer or middle marker.", correct: false }
    ]
  },
  {
    question: "Which substitution is appropriate during an ILS approach?",
    choices: [
      { text: "DME, when located at the localizer antenna site, should be substituted for either the outer or middle marker.", correct: false },
      { text: "A VOR radial crossing the outer marker site may be substituted for the outer marker.", correct: false },
      { text: "LOC minimums should be substituted for ILS minimums whenever the glide slope becomes inoperative.", correct: true }
    ]
  },
  {
    question: "A pilot is making an ILS approach and is past the OM to a runway which has a VASI. What action should the pilot take if an electronic glide slope malfunction occurs and the pilot has the VASI in sight?",
    choices: [
      { text: "The pilot may continue the approach and use the VASI glide slope in place of the electronic glide slope.", correct: true },
      { text: "The pilot should inform ATC of the malfunction and then descend immediately to the localizer DH and make a localizer approach.", correct: false },
      { text: "The pilot must request an LOC approach, and may descend below the VASI at the pilot's discretion.", correct: false }
    ]
  },
  {
    question: "What effect will a change in wind direction have upon maintaining a 3° glide slope at a constant true airspeed?",
    choices: [
      { text: "Rate of descent must be constant to remain on the glide slope.", correct: false },
      { text: "When ground speed decreases, rate of descent must increase.", correct: false },
      { text: "When ground speed increases, rate of descent must increase.", correct: true }
    ]
  },
  {
    question: "While flying a 3° glide slope, a constant tailwind shears to a calm wind. Which conditions should the pilot expect?",
    choices: [
      { text: "Airspeed and pitch attitude increase and there is a tendency to go above glide slope.", correct: true },
      { text: "Airspeed and pitch attitude increase and there is a tendency to go below glide slope.", correct: false },
      { text: "Airspeed and pitch attitude decrease and there is a tendency to go below glide slope.", correct: false }
    ]
  },
  {
    question: "While flying a 3° glide slope, a headwind shears to a tailwind. Which conditions should the pilot expect on the glide slope?",
    choices: [
      { text: "Airspeed and pitch attitude increase and there is a tendency to go above glide slope.", correct: false },
      { text: "Airspeed and pitch attitude decrease and there is a tendency to remain on the glide slope.", correct: false },
      { text: "Airspeed and pitch attitude decrease and there is a tendency to go below glide slope.", correct: true }
    ]
  },
  {
    question: "Which of the following conditions is required before 'timed approaches from a holding fix' may be conducted?",
    choices: [
      { text: "Direct communication between the pilot and the tower must be established prior to beginning the approach.", correct: false },
      { text: "If more than one missed approach procedure is available, none may require a course reversal.", correct: true },
      { text: "If more than one missed approach procedure is available, only one may require a course reversal.", correct: false }
    ]
  },
  {
    question: "If only one missed approach procedure is available, which of the following conditions is required when conducting 'timed approaches from a holding fix'?",
    choices: [
      { text: "The reported ceiling and visibility minimums must be equal to or greater than the highest prescribed circling minimums for the IAP.", correct: true },
      { text: "The reported ceiling and visibility minimums must be equal to or greater than the highest prescribed straight in MDA minimums for the IAP.", correct: false },
      { text: "The pilot must contact the airport control tower prior to departing the holding fix inbound.", correct: false }
    ]
  },
  {
    question: "Prior to conducting 'timed approaches from a holding fix,' which one of the following is required?",
    choices: [
      { text: "The airport where the approach is to be conducted must have a control tower in operation.", correct: true },
      { text: "The time required to fly from the primary facility to the field boundary must be determined by a reliable means.", correct: false },
      { text: "The pilot must have established two-way communications with the tower before departing the holding fix.", correct: false }
    ]
  },
  {
    question: "When making a 'timed approach' from a holding fix at the outer marker, the pilot should adjust the",
    choices: [
      { text: "holding pattern to start the procedure turn at the assigned time.", correct: false },
      { text: "holding pattern to leave the final approach fix inbound at the assigned time.", correct: true },
      { text: "airspeed at the final approach fix in order to arrive at the missed approach point at the assigned time.", correct: false }
    ]
  },
  {
    question: "What does the symbol T within a black triangle in the minimums section of the IAP for a particular airport indicate?",
    choices: [
      { text: "Takeoff minimums are 1 mile for aircraft having two engines or less and ½ mile for those with more than two engines.", correct: false },
      { text: "Takeoff minimums are not standard and/or departure procedures are published.", correct: true },
      { text: "Instrument takeoffs are not authorized.", correct: false }
    ]
  },
  {
    question: "When being radar vectored for an ILS approach, at what point may you start a descent from your last assigned altitude to a lower minimum altitude if cleared for the approach?",
    choices: [
      { text: "You may descend immediately to published glide slope interception altitude.", correct: false },
      { text: "When established on a segment of a published route or IAP.", correct: true },
      { text: "Only after you are established on the final approach unless informed otherwise by ATC.", correct: false }
    ]
  },
  {
    question: "While being radar vectored, an approach clearance is received. The last assigned altitude should be maintained until",
    choices: [
      { text: "reaching the FAF.", correct: false },
      { text: "established on a segment of a published route or IAP.", correct: true },
      { text: "advised to begin descent.", correct: false }
    ]
  },
  {
    question: "(Refer to figure 123.) What minimum navigation equipment is required to complete the VOR/DME-A procedure?",
    choices: [
      { text: "Two VOR receivers and DME.", correct: false },
      { text: "One VOR receiver.", correct: false },
      { text: "One VOR receiver and DME.", correct: true }
    ]
  },
  {
    question: "Under which condition does ATC issue a STAR?",
    choices: [
      { text: "Only if the pilot requests a STAR in the 'Remarks' section of the flight plan.", correct: false },
      { text: "When ATC deems it appropriate, unless the pilot requests 'No STAR.'", correct: true },
      { text: "To all pilots wherever STAR's are available.", correct: false }
    ]
  },
  {
    question: "Which is true regarding the use of an instrument departure procedure chart?",
    choices: [
      { text: "The use of instrument departure procedures is mandatory.", correct: false },
      { text: "To use an instrument departure procedure, the pilot must possess both the textual and graphic form of the approved procedure.", correct: false },
      { text: "To use an instrument departure procedure, the pilot must possess at least the textual description of the approved procedure.", correct: true }
    ]
  },
  {
    question: "Which is true regarding STAR's?",
    choices: [
      { text: "STAR's are used to separate IFR and VFR traffic.", correct: false },
      { text: "STAR's are used at certain airports to decrease traffic congestion.", correct: false },
      { text: "STAR's are established to simplify clearance delivery procedures.", correct: true }
    ]
  },
  {
    question: "What action is recommended if a pilot does not wish to use an instrument departure procedure?",
    choices: [
      { text: "Advise clearance delivery or ground control before departure.", correct: false },
      { text: "Advise departure control upon initial contact.", correct: false },
      { text: "Enter 'No DP' in the REMARKS section of the IFR flight plan.", correct: true }
    ]
  },
  {
    question: "Which procedure applies to instrument departure procedures?",
    choices: [
      { text: "Instrument departure clearances will not be issued unless requested by the pilot.", correct: false },
      { text: "The pilot in command must accept an instrument departure procedure when issued by ATC.", correct: false },
      { text: "If an instrument departure procedure is accepted, the pilot must possess at least a textual description.", correct: true }
    ]
  },
  {
    question: "If Receiver Autonomous Integrity Monitoring (RAIM) is not available when setting up a GPS approach, the pilot should",
    choices: [
      { text: "continue the approach, expecting to recapture the satellites before reaching the FAF.", correct: false },
      { text: "continue to the MAP and hold until the satellites are recaptured.", correct: false },
      { text: "select another type of navigation and approach system.", correct: true }
    ]
  },
  {
    question: "When using GPS for navigation and instrument approaches, any required alternate airport must have",
    choices: [
      { text: "a GPS approach that is anticipated to be operational and available at the ETA.", correct: false },
      { text: "authorization to fly approaches under IFR using GPS avionics systems.", correct: false },
      { text: "an approved operational instrument approach procedure other than GPS.", correct: true }
    ]
  },
  {
    question: "What action should be taken if hyperventilation is suspected?",
    choices: [
      { text: "Breathe at a slower rate by taking very deep breaths.", correct: false },
      { text: "Consciously breathe at a slower rate than normal.", correct: true },
      { text: "Consciously force yourself to take deep breaths and breathe at a faster rate than normal.", correct: false }
    ]
  },
  {
    question: "A pilot is more subject to spatial disorientation if",
    choices: [
      { text: "body signals are used to interpret flight attitude.", correct: true },
      { text: "kinesthetic senses are ignored.", correct: false },
      { text: "eyes are moved often in the process of cross-checking the flight instruments.", correct: false }
    ]
  },
  {
    question: "Which procedure is recommended to prevent or overcome spatial disorientation?",
    choices: [
      { text: "Rely on the kinesthetic sense.", correct: false },
      { text: "Reduce head and eye movements to the extent possible.", correct: false },
      { text: "Rely on the indications of the flight instruments.", correct: true }
    ]
  },
  {
    question: "Which technique should a pilot use to scan for traffic to the right and left during straight-and-level flight?",
    choices: [
      { text: "Concentrate on relative movement detected in the peripheral vision area.", correct: false },
      { text: "Systematically focus on different segments of the sky for short intervals.", correct: true },
      { text: "Continuous sweeping of the windshield from right to left.", correct: false }
    ]
  },
  {
    question: "Which force, in the Northern Hemisphere, acts at a right angle to the wind and deflects it to the right until parallel to the isobars?",
    choices: [
      { text: "Pressure gradient.", correct: false },
      { text: "Centrifugal.", correct: false },
      { text: "Coriolis.", correct: true }
    ]
  },
  {
    question: "What relationship exists between the winds at 2,000 feet above the surface and the surface winds?",
    choices: [
      { text: "The winds at 2,000 feet and the surface winds flow in the same direction, but the surface winds are weaker due to friction.", correct: false },
      { text: "The surface winds tend to veer to the right of the winds at 2,000 feet and are usually weaker.", correct: false },
      { text: "The winds at 2,000 feet tend to parallel the isobars while the surface winds cross the isobars at an angle toward lower pressure and are weaker.", correct: true }
    ]
  },
  {
    question: "What causes surface winds to flow across the isobars at an angle rather than parallel to the isobars?",
    choices: [
      { text: "Coriolis force.", correct: false },
      { text: "Surface friction.", correct: true },
      { text: "The greater density of the air at the surface.", correct: false }
    ]
  },
  {
    question: "What type of clouds will be formed if very stable moist air is forced up slope?",
    choices: [
      { text: "First stratified clouds and then vertical clouds.", correct: false },
      { text: "Vertical clouds with increasing height.", correct: false },
      { text: "Stratified clouds with little vertical development.", correct: true }
    ]
  },
  {
    question: "Which of the following combinations of weather producing variables would likely result in cumuliform type clouds, good visibility, rain showers, and possible clear-type icing in clouds?",
    choices: [
      { text: "Stable, dry air, and orographic lifting.", correct: false },
      { text: "Unstable, moist air, and orographic lifting.", correct: true },
      { text: "Unstable, moist air, and no lifting mechanism.", correct: false }
    ]
  },
  {
    question: "The presence of standing lenticular altocumulus clouds is a good indication of",
    choices: [
      { text: "heavy icing conditions.", correct: false },
      { text: "a jetstream.", correct: false },
      { text: "very strong turbulence.", correct: true }
    ]
  },
  {
    question: "Why is frost considered hazardous to flight operation?",
    choices: [
      { text: "Frost decreases control effectiveness.", correct: false },
      { text: "Frost causes early airflow separation resulting in a loss of lift.", correct: true },
      { text: "Frost changes the basic aerodynamic shape of the airfoil.", correct: false }
    ]
  },
  {
    question: "What is meant by the entry in the remarks section of METAR surface report for KBNA? METAR KBNA 211250Z 33018KT 290V260 1/2SM R31/2700FT +SN BLSNFG VV008 00/M03 A2991 RMK RAE42SNB42",
    choices: [
      { text: "Rain ended 42 past the hour, snow began 42 past the hour.", correct: true },
      { text: "Heavy blowing snow and fog on runway 31.", correct: false },
      { text: "The wind is variable from 290° to 360°.", correct: false }
    ]
  },
  {
    question: "The reporting station originating this Aviation Routine Weather Report has a field elevation of 620 feet. If the reported sky cover is one continuous layer, what is its thickness (tops of OVC are reported at 6,500 feet)? METAR KMDW 121856Z AUTO 32005KT 1 1/2SM +RA BR OVC007 17/16 A2980",
    choices: [
      { text: "5,180 feet.", correct: true },
      { text: "5,880 feet.", correct: false },
      { text: "5,800 feet.", correct: false }
    ]
  },
  {
    question: "The station originating the following weather report has a field elevation of 1,300 feet MSL. From the bottom of the overcast cloud layer, what is its thickness (tops of OVC are reported at 3,800 feet)? SPECI KOKC 2228Z 28024G36KT 3/4SM BKN008 OVC020 28/23 A3000",
    choices: [
      { text: "1,700 feet.", correct: false },
      { text: "2,500 feet.", correct: false },
      { text: "500 feet.", correct: true }
    ]
  },
  {
    question: "What significant sky condition is reported in this METAR observation? METAR KBNA 1250Z 33018KT 290V360 1/2SM R31/2700FT +SN BLSNFG VV008 00/M03 A2991 RMK RERAE42SNB42",
    choices: [
      { text: "Measured ceiling is 300 feet overcast.", correct: false },
      { text: "Sky is obscured with vertical visibility of 800 feet.", correct: true },
      { text: "Runway 31 ceiling is 2,700 feet.", correct: false }
    ]
  },
  {
    question: "Interpret this PIREP. MRB UA/OV MRB/TM 1430/FL 060/TP C182/SK BKN BL /WX RA/TB MDT.",
    choices: [
      { text: "FL 60,000, intermittently below clouds; moderate rain, turbulence increasing with the wind.", correct: false },
      { text: "At 6,000 feet; between layers; moderate turbulence; moderate rain.", correct: true },
      { text: "Ceiling 6,000 feet intermittently below moderate thundershowers; turbulence increasing westward.", correct: false }
    ]
  },
  {
    question: "Which response most closely interprets the following PIREP? UA/OV OKC 063064/TM 1522/FL080/TP C172/TA -04/WV245040/TB LGT/RM IN CLR.",
    choices: [
      { text: "64 NM on the 63° radial from Oklahoma City VOR at 1522 UTC, flight level 8,000 ft. Type of aircraft is a Cessna 172.", correct: true },
      { text: "Reported by a Cessna 172, turbulence and light rime icing in climb to 8,000 ft.", correct: false },
      { text: "63 NM on the 64° radial from Oklahoma City, thunderstorm and light rain at 1522 UTC.", correct: false }
    ]
  },
  {
    question: "From which primary source should you obtain information regarding the weather expected to exist at your destination at your estimated time of arrival?",
    choices: [
      { text: "Terminal Aerodrome Forecast.", correct: true },
      { text: "Weather Depiction Chart.", correct: false },
      { text: "Radar Summary and Weather Depiction Chart.", correct: false }
    ]
  },
  {
    question: "What is the wind shear forecast in the following TAF? TAF KCVG 231051Z 231212 12012KT 4SM -RA BR OVC008 WS005/27050KT TEMPO 1719 1/2SM -RA FG FM1930 09012KT 1SM -DZ BR VV003 BECMG 2021 5SM HZ=",
    choices: [
      { text: "50 feet AGL from 270° at 50 KT.", correct: false },
      { text: "500 feet AGL from 270° at 50 KT.", correct: true },
      { text: "5 feet AGL from 270° at 50 KT.", correct: false }
    ]
  },
  {
    question: "What is the forecast wind at 1800Z in the following TAF? KMEM 091740Z 1818 00000KT 1/2SM RAFG OVC005=",
    choices: [
      { text: "Not recorded.", correct: false },
      { text: "Calm.", correct: true },
      { text: "Unknown.", correct: false }
    ]
  },
  {
    question: "When the visibility is greater than 6 SM on a TAF it is expressed as",
    choices: [
      { text: "P6SM.", correct: true },
      { text: "6PSM.", correct: false },
      { text: "6SMP.", correct: false }
    ]
  },
  {
    question: "A 'VRB' wind entry in a Terminal Aerodrome Forecast (TAF) will be indicated when the wind is",
    choices: [
      { text: "3 knots or less.", correct: true },
      { text: "6 knots or less.", correct: false },
      { text: "9 knots or less.", correct: false }
    ]
  },
  {
    question: "Which primary source should be used to obtain forecast weather information at your destination for the planned ETA?",
    choices: [
      { text: "Terminal Aerodrome Forecast (TAF).", correct: true },
      { text: "Area Forecast.", correct: false },
      { text: "Radar Summary and Weather Depiction Charts.", correct: false }
    ]
  },
  {
    question: "The body of a Terminal Aerodrome Forecast (TAF) covers a geographical proximity within a",
    choices: [
      { text: "5 nautical mile radius of the center of an airport.", correct: false },
      { text: "5 to 10 statute mile radius from the center of an airport runway complex.", correct: false },
      { text: "5 statute mile radius from the center of an airport runway complex.", correct: true }
    ]
  },
  {
    question: "How much colder than standard temperature is the forecast temperature at 9,000 feet, as indicated in the following excerpt from the Winds and Temperature Aloft Forecast? FT 6000 0737-04 9000 1043-10",
    choices: [
      { text: "3°C.", correct: false },
      { text: "10°C.", correct: false },
      { text: "7°C.", correct: true }
    ]
  },
  {
    question: "Decode the excerpt from the Winds and Temperature Aloft Forecast (FD) for OKC at 39,000 feet. FT 3000 6000 39000 OKC 830558",
    choices: [
      { text: "Wind 330° at 105 knots, temperature -58°C.", correct: true },
      { text: "Wind 130° at 50 knots, temperature -58°C.", correct: false },
      { text: "Wind 330° at 205 knots, temperature -58°C.", correct: false }
    ]
  },
  {
    question: "What is the definition of MEA?",
    choices: [
      { text: "The lowest published altitude which meets obstacle requirements, assures acceptable navigational signal coverage, two-way radio communications, and provides adequate radar coverage.", correct: false },
      { text: "An altitude which meets obstacle clearance requirements, assures acceptable navigation signal coverage, two-way radio communications, adequate radar coverage, and accurate DME mileage.", correct: false },
      { text: "The lowest published altitude which meets obstacle clearance requirements and assures acceptable navigational signal coverage.", correct: true }
    ]
  },
  {
    question: "Reception of signals from an off-airway radio facility may be inadequate to identify the fix at the designated MEA. In this case, which altitude is designated for the fix?",
    choices: [
      { text: "MCA.", correct: false },
      { text: "MOCA.", correct: false },
      { text: "MRA.", correct: true }
    ]
  },
  {
    question: "Reception of signals from a radio facility, located off the airway being flown, may be inadequate at the designated MEA to identify the fix. In this case, which altitude is designated for the fix?",
    choices: [
      { text: "MOCA.", correct: false },
      { text: "MCA.", correct: false },
      { text: "MRA.", correct: true }
    ]
  },
  {
    question: "ATC may assign the MOCA when certain special conditions exist, and when within",
    choices: [
      { text: "30 NM of a VOR.", correct: false },
      { text: "25 NM of a VOR.", correct: false },
      { text: "22 NM of a VOR.", correct: true }
    ]
  },
  {
    question: "Acceptable navigational signal coverage at the MOCA is assured for a distance from the VOR of only",
    choices: [
      { text: "12 NM.", correct: false },
      { text: "22 NM.", correct: true },
      { text: "25 NM.", correct: false }
    ]
  },
  {
    question: "Which aeronautical chart depicts Military Training Routes (MTR) above 1,500 feet?",
    choices: [
      { text: "IFR Planning Chart.", correct: false },
      { text: "IFR Low Altitude En Route Chart.", correct: true },
      { text: "IFR High Altitude En Route Chart.", correct: false }
    ]
  },
  {
    question: "The altitude that provides acceptable navigational signal coverage for the route, and meets obstacle clearance requirements is the minimum:",
    choices: [
      { text: "obstacle clearance altitude.", correct: false },
      { text: "reception altitude.", correct: false },
      { text: "enroute altitude.", correct: true }
    ]
  },
  {
    question: "Which condition is guaranteed for all of the following altitude limits: MAA, MCA, MRA, MOCA, and MEA? (Non-mountainous area.)",
    choices: [
      { text: "Adequate navigation signals.", correct: false },
      { text: "1,000-foot obstacle clearance.", correct: true },
      { text: "Adequate communications.", correct: false }
    ]
  },
  {
    question: "If no MCA is specified, what is the lowest altitude for crossing a radio fix, beyond which a higher minimum applies?",
    choices: [
      { text: "The MRA at which the fix is approached.", correct: false },
      { text: "The MOCA for the route segment beyond the fix.", correct: false },
      { text: "The MEA at which the fix is approached.", correct: true }
    ]
  },
  {
    question: "In the case of operations over an area designated as a mountainous area, no person may operate an aircraft under IFR below 2,000 feet above the highest obstacle within a horizontal distance of",
    choices: [
      { text: "4 SM from the course flown.", correct: false },
      { text: "3 SM from the course flown.", correct: false },
      { text: "4 NM from the course flown.", correct: true }
    ]
  },
  {
    question: "In the case of operations over an area designated as a mountainous area where no other minimum altitude is prescribed, no person may operate an aircraft under IFR below an altitude of",
    choices: [
      { text: "500 feet above the highest obstacle.", correct: false },
      { text: "1,000 feet above the highest obstacle.", correct: false },
      { text: "2,000 feet above the highest obstacle.", correct: true }
    ]
  },
  {
    question: "MEA is an altitude which assures",
    choices: [
      { text: "obstacle clearance, accurate navigational signals from more than one VORTAC, and accurate DME mileage.", correct: false },
      { text: "acceptable navigational signal coverage and meets obstruction clearance requirements.", correct: true },
      { text: "a 1,000-foot obstacle clearance within 2 miles of an airway and assures accurate DME mileage.", correct: false }
    ]
  },
  {
    question: "Unless otherwise specified on the chart, the minimum en route altitude along a jet route is",
    choices: [
      { text: "18,000 feet MSL.", correct: true },
      { text: "24,000 feet MSL.", correct: false },
      { text: "10,000 feet MSL.", correct: false }
    ]
  },
  {
    question: "Under which of the following circumstances will ATC issue a VFR restriction to an IFR flight?",
    choices: [
      { text: "When the pilot requests it.", correct: true },
      { text: "When it is necessary to provide separation between IFR and special VFR traffic.", correct: false },
      { text: "Whenever the pilot reports the loss of any navigational aid.", correct: false }
    ]
  },
  {
    question: "What altitude may a pilot select upon receiving a VFR-on-Top clearance?",
    choices: [
      { text: "Any appropriate VFR altitude at or above the MEA in VFR weather conditions.", correct: true },
      { text: "Any altitude at least 1,000 feet above the meteorological condition.", correct: false },
      { text: "Any VFR altitude appropriate for the direction of flight at least 1,000 feet above the meteorological condition.", correct: false }
    ]
  },
  {
    question: "Which rules apply to the pilot in command when operating on a VFR-on-Top clearance?",
    choices: [
      { text: "VFR when 'in the clear' and IFR when 'in the clouds.'", correct: false },
      { text: "VFR and IFR.", correct: true },
      { text: "VFR only.", correct: false }
    ]
  },
  {
    question: "Which ATC clearance should instrument-rated pilots request in order to climb through a cloud layer or an area of reduced visibility and then continue the flight VFR?",
    choices: [
      { text: "VFR Over-the-Top.", correct: false },
      { text: "Special VFR to VFR Over-the-Top.", correct: false },
      { text: "To VFR on Top.", correct: true }
    ]
  },
  {
    question: "When can a VFR-on-Top clearance be assigned by ATC?",
    choices: [
      { text: "When VFR conditions exist, but there is a layer of clouds below the MEA.", correct: false },
      { text: "Any time suitable conditions exist and ATC wishes to expedite traffic flow.", correct: false },
      { text: "Only upon request of the pilot when conditions are indicated to be suitable.", correct: true }
    ]
  },
  {
    question: "When on a VFR-on-Top clearance, the cruising altitude is based on",
    choices: [
      { text: "Magnetic course.", correct: true },
      { text: "True course.", correct: false },
      { text: "Magnetic heading.", correct: false }
    ]
  },
  {
    question: "When must a pilot fly at a cardinal altitude plus 500 feet on an IFR flight plan?",
    choices: [
      { text: "When flying above 18,000 feet in VFR conditions.", correct: false },
      { text: "When flying in VFR conditions above clouds.", correct: false },
      { text: "When assigned a VFR-on-Top clearance.", correct: true }
    ]
  },
  {
    question: "Where are VFR-on-Top operations prohibited?",
    choices: [
      { text: "In Class A airspace.", correct: true },
      { text: "During off-airways direct flights.", correct: false },
      { text: "When flying through Class B airspace.", correct: false }
    ]
  },
  {
    question: "You have filed an IFR flight plan with a VFR-on-Top clearance in lieu of an assigned altitude. If you receive this clearance and fly a course of 180°, at what altitude should you fly? (Assume VFR conditions.)",
    choices: [
      { text: "Any IFR altitude which will enable you to remain in VFR conditions.", correct: false },
      { text: "An odd thousand-foot MSL altitude plus 500 feet.", correct: false },
      { text: "An even thousand-foot MSL altitude plus 500 feet.", correct: true }
    ]
  },
  {
    question: "What minimums must be considered in selecting an altitude when operating with a VFR-on-Top clearance?",
    choices: [
      { text: "At least 500 feet above the lowest MEA, or appropriate MOCA, and at least 1,000 feet above the existing meteorological condition.", correct: false },
      { text: "At least 1,000 feet above the lowest MEA, appropriate MOCA, or existing meteorological condition.", correct: false },
      { text: "Minimum IFR altitude, minimum distance from clouds, and visibility appropriate to altitude selected.", correct: true }
    ]
  },
  {
    question: "If, while in Class E airspace, a clearance is received to 'maintain VFR conditions on top,' the pilot should maintain a VFR cruising altitude based on the direction of the",
    choices: [
      { text: "Magnetic heading.", correct: false },
      { text: "True course.", correct: false },
      { text: "Magnetic course.", correct: true }
    ]
  },
  {
    question: "In which airspace is VFR-on-Top operation prohibited?",
    choices: [
      { text: "Class E airspace.", correct: false },
      { text: "Class B airspace.", correct: false },
      { text: "Class A airspace.", correct: true }
    ]
  },
  {
    question: "What cruising altitude is appropriate for VFR on Top on a westbound flight below 18,000 feet?",
    choices: [
      { text: "Odd thousand-foot levels plus 500 feet, but not below MEA.", correct: false },
      { text: "Even thousand-foot levels.", correct: false },
      { text: "Even thousand-foot levels plus 500 feet, but not below MEA.", correct: true }
    ]
  },
  {
    question: "What reports are required of a flight operating on an IFR clearance specifying VFR on Top in a non radar environment?",
    choices: [
      { text: "The same reports that are required for any IFR flight.", correct: true },
      { text: "Only the reporting of any unforecast weather.", correct: false },
      { text: "All normal IFR reports except vacating altitudes.", correct: false }
    ]
  },
  {
    question: "When operating under IFR with a VFR-On-Top clearance, what altitude should be maintained?",
    choices: [
      { text: "An IFR cruising altitude appropriate to the magnetic course being flown.", correct: false },
      { text: "The last IFR altitude assigned by ATC.", correct: false },
      { text: "A VFR cruising altitude appropriate to the magnetic course being flown and as restricted by ATC.", correct: true }
    ]
  },
  {
    question: "Where is the VOR COP when flying east on V306 from Daisetta to Lake Charles?",
    choices: [
      { text: "50 NM east of DAS.", correct: false },
      { text: "40 NM east of DAS.", correct: false },
      { text: "30 NM east of DAS.", correct: true }
    ]
  },
  {
    question: "At STRUT intersection headed eastbound, ATC instructs you to hold west on the 10 DME fix west of LCH on V306, standard turns. What entry procedure is recommended?",
    choices: [
      { text: "Parallel.", correct: false },
      { text: "Direct.", correct: true },
      { text: "Teardrop.", correct: false }
    ]
  },
  {
    question: "What is indicated by the localizer course symbol at Jefferson County Airport?",
    choices: [
      { text: "A published ILS localizer course, which has an additional navigation function.", correct: true },
      { text: "A published LDA localizer course.", correct: false },
      { text: "A published SDF localizer course.", correct: false }
    ]
  },
  {
    question: "Which VHF frequencies, other than 121.5, can be used to receive De Ridder FSS in the Lake Charles area?",
    choices: [
      { text: "123.6, 122.65.", correct: false },
      { text: "122.2, 122.3.", correct: true },
      { text: "122.1, 126.4.", correct: false }
    ]
  },
  {
    question: "Why is the localizer back course at Jefferson County Airport depicted?",
    choices: [
      { text: "The back course has a glide slope.", correct: false },
      { text: "The back course is not aligned with a runway.", correct: false },
      { text: "The back course has an additional navigation function.", correct: true }
    ]
  },
  {
    question: "Where is the VOR changeover point on V20 between Beaumont and Hobby?",
    choices: [
      { text: "MOCKS intersection.", correct: false },
      { text: "Anahuac Beacon.", correct: false },
      { text: "Halfway point.", correct: true }
    ]
  },
  {
    question: "What is your position with reference to FALSE intersection (V222) if your VOR receivers indicate as shown?",
    choices: [
      { text: "South of V222 and east of FALSE intersection.", correct: true },
      { text: "North of V222 and east of FALSE intersection.", correct: false },
      { text: "South of V222 and west of FALSE intersection.", correct: false }
    ]
  },
  {
    question: "While holding at the 10 DME fix east of LCH for an ILS approach to RWY 15 at Lake Charles Muni Airport, ATC advises you to expect clearance for the approach at 1015. At 1000 you experience two-way radio communications failure. Which procedure should be followed?",
    choices: [
      { text: "Squawk 7700 for 1 minute, then 7600. After 1 minute, descend to the minimum final approach fix altitude. Start your approach at 1015.", correct: false },
      { text: "Squawk 7600 and listen on the LOM frequency for instructions from ATC. If no instructions are received, start your approach at 1015.", correct: false },
      { text: "Squawk 7600; plan to begin your approach at 1015.", correct: true }
    ]
  },
  {
    question: "When flying from Milford Municipal to Bryce Canyon via V235 and V293, what minimum altitude should you be at when crossing Cedar City VOR?",
    choices: [
      { text: "11,400 feet.", correct: false },
      { text: "13,000 feet.", correct: false },
      { text: "12,000 feet.", correct: true }
    ]
  },
  {
    question: "What VHF frequencies are available for communications with Cedar City FSS?",
    choices: [
      { text: "123.6, 121.5, 108.6, and 112.8.", correct: false },
      { text: "122.2, 121.5, 122.0, and 123.6.", correct: false },
      { text: "122.2, 121.5, 122.6, and 112.1.", correct: true }
    ]
  },
  {
    question: "What are the oxygen requirements for an IFR flight northeast bound from Bryce Canyon on V382 at the lowest appropriate altitude in an unpressurized aircraft?",
    choices: [
      { text: "The required minimum crew must be provided and use supplemental oxygen for that part of the flight of more than 30 minutes.", correct: false },
      { text: "The required minimum crew must be provided and use supplemental oxygen for that part of the flight of more than 30 minutes, and the passengers must be provided supplemental oxygen.", correct: false },
      { text: "The required minimum crew must be provided and use supplemental oxygen, and all occupants must be provided supplemental oxygen for the entire flight above 15,000 feet.", correct: true }
    ]
  },
  {
    question: "In the event of two-way radio communications failure while operating on an IFR clearance in VFR conditions, the pilot should continue",
    choices: [
      { text: "By the route assigned in the last ATC clearance received.", correct: false },
      { text: "The flight under VFR and land as soon as practical.", correct: true },
      { text: "The flight by the most direct route to the fix specified in the last clearance.", correct: false }
    ]
  },
  {
    question: "On what frequency should you obtain En Route Flight Advisory Service below FL 180?",
    choices: [
      { text: "123.6.", correct: false },
      { text: "122.0.", correct: true },
      { text: "122.1T/112.8R.", correct: false }
    ]
  },
  {
    question: "What is the ARTCC discrete frequency at the COP on V208 southwest bound from HVE to PGA VOR/DME?",
    choices: [
      { text: "122.4.", correct: false },
      { text: "133.6.", correct: true },
      { text: "122.1.", correct: false }
    ]
  },
  {
    question: "What type airspace exists above Bryce Canyon Airport from the surface to 1,200 feet AGL?",
    choices: [
      { text: "Class D.", correct: false },
      { text: "Class E.", correct: false },
      { text: "Class G.", correct: true }
    ]
  },
  {
    question: "What is your relationship to the airway while en route from BCE VORTAC to HVE VORTAC on V8?",
    choices: [
      { text: "Left of course on V382.", correct: false },
      { text: "Right of course on V8.", correct: false },
      { text: "Left of course on V8.", correct: true }
    ]
  },
  {
    question: "What are the two limiting cruising altitudes useable on V343 for a VFR-on-Top flight from DBS VORTAC to RANEY intersection?",
    choices: [
      { text: "15,000 and 17,000 feet.", correct: false },
      { text: "15,500 and 17,500 feet.", correct: true },
      { text: "14,500 and 16,500 feet.", correct: false }
    ]
  },
  {
    question: "What should be the approximate elapsed time from BZN VOR to DBS VORTAC, if the wind is 24 knots from 260° and your intended TAS is 185 knots? (VAR 17°E.)",
    choices: [
      { text: "37 minutes.", correct: false },
      { text: "39 minutes.", correct: true },
      { text: "33 minutes.", correct: false }
    ]
  },
  {
    question: "Southbound on V257, at what time should you arrive at DBS VORTAC if you crossed over CPN VORTAC at 0850 and over DIVID intersection at 0854?",
    choices: [
      { text: "0939.", correct: false },
      { text: "0943.", correct: true },
      { text: "0947.", correct: false }
    ]
  },
  {
    question: "What is the minimum crossing altitude at DBS VORTAC for a northbound IFR flight on V257?",
    choices: [
      { text: "7,500 feet.", correct: false },
      { text: "8,600 feet.", correct: true },
      { text: "11,100 feet.", correct: false }
    ]
  },
  {
    question: "What are the oxygen requirements for an IFR flight eastbound on V520 from DBS VORTAC in an unpressurized aircraft at the MEA?",
    choices: [
      { text: "The required minimum crew must be provided and use supplemental oxygen for that part of the flight of more than 30 minutes, and the passengers must be provided supplemental oxygen.", correct: false },
      { text: "The required minimum crew must be provided and use supplemental oxygen.", correct: true },
      { text: "The required minimum crew must be provided and use supplemental oxygen for that part of the flight of more than 30 minutes.", correct: false }
    ]
  },
  {
    question: "What is the function of the Great Falls RCO (Yellowstone vicinity)?",
    choices: [
      { text: "Remote communications outlet for Great Falls FSS.", correct: true },
      { text: "Satellite remote controlled by Salt Lake Center with limited service.", correct: false },
      { text: "Long range communications outlet for Great Falls Center.", correct: false }
    ]
  },
  {
    question: "Where should you change VOR frequencies when en route from DBS VORTAC to JAC VOR/DME on V520?",
    choices: [
      { text: "60 NM from DBS VORTAC.", correct: true },
      { text: "35 NM from DBS VORTAC.", correct: false },
      { text: "60 NM from JAC VOR/DME.", correct: false }
    ]
  },
  {
    question: "What lighting is indicated on the chart for Jackson Hole Airport?",
    choices: [
      { text: "No lighting available.", correct: false },
      { text: "Lights on prior request.", correct: false },
      { text: "Pilot controlled lighting.", correct: true }
    ]
  },
  {
    question: "What is the minimum crossing altitude at SABAT intersection when eastbound from DBS VORTAC on V298?",
    choices: [
      { text: "11,100 feet.", correct: true },
      { text: "8,300 feet.", correct: false },
      { text: "13,000 feet.", correct: false }
    ]
  },
  {
    question: "On which frequencies could you communicate with the Montgomery County FSS while on the ground at College Station?",
    choices: [
      { text: "118.5, 122.65, 122.2.", correct: false },
      { text: "122.65, 122.2.", correct: true },
      { text: "122.65, 122.2, 122.1, 113.3.", correct: false }
    ]
  },
  {
    question: "Which indications on the VOR receivers and DME at the Easterwood Field VOR receiver checkpoint would meet the regulatory requirement for this flight?",
    choices: [
      { text: "097° TO, 096° TO, 3.2.", correct: false },
      { text: "097° FROM, 101° FROM, 3.3.", correct: true },
      { text: "277° FROM, 280° FROM, 3.3.", correct: false }
    ]
  },
  {
    question: "What are the operating hours (local standard time) of the Houston EFAS?",
    choices: [
      { text: "1800 to 1000.", correct: false },
      { text: "0600 to 2200.", correct: true },
      { text: "0700 to 2300.", correct: false }
    ]
  },
  {
    question: "The course deviation indicators (CDI) are centered. Which indications on the No. 1 and No. 2 VOR receivers over the Lafayette Regional Airport would meet the requirements for the VOR receiver check?",
    choices: [
      { text: "160° FROM, 162° FROM", correct: false },
      { text: "341° FROM, 330° FROM", correct: false },
      { text: "162° TO, 346° FROM", correct: true }
    ]
  },
  {
    question: "Which point would be the appropriate VOR COP on V552 from the LFT to the TBD VORTACs?",
    choices: [
      { text: "CLYNT intersection.", correct: false },
      { text: "34 DME from the LFT VORTAC.", correct: true },
      { text: "HATCH intersection.", correct: false }
    ]
  },
  {
    question: "What is your position relative to GRICE intersection?",
    choices: [
      { text: "Left of V552 and approaching GRICE intersection.", correct: false },
      { text: "Right of V552 and approaching GRICE intersection.", correct: true },
      { text: "Right of V552 and past GRICE intersection.", correct: false }
    ]
  },
  {
    question: "What is the significance of the symbol at GRICE intersection?",
    choices: [
      { text: "It signifies a localizer-only approach is available at Harry P. Williams Memorial.", correct: false },
      { text: "GRICE intersection also serves as the FAF for the ILS approach procedure to Harry P. Williams Memorial.", correct: false },
      { text: "The localizer has an additional navigation function.", correct: true }
    ]
  },
  {
    question: "Determine the time to be entered in block 10 of the flight from GJT to DRO. (Refer to FD excerpt and figures.)",
    choices: [
      { text: "1 hour 03 minutes.", correct: false },
      { text: "1 hour 08 minutes.", correct: true },
      { text: "58 minutes.", correct: false }
    ]
  },
  {
    question: "After departing GJT and arriving at Durango Co., La Plata Co. Airport, you are unable to land because of weather. How long can you hold over DRO before departing for return flight to the alternate, Grand Junction Co., Walker Field Airport?",
    choices: [
      { text: "1 hour 42 minutes.", correct: false },
      { text: "1 hour 37 minutes.", correct: false },
      { text: "1 hour 33 minutes.", correct: true }
    ]
  },
  {
    question: "What fuel would be consumed on the flight between Grand Junction Co. and Durango, Co. if the average fuel consumption is 15 GPH?",
    choices: [
      { text: "25 gallons.", correct: false },
      { text: "20 gallons.", correct: false },
      { text: "17 gallons.", correct: true }
    ]
  },
  {
    question: "For planning purposes, what would be the highest MEA on V187 between Grand Junction, Walker Airport, and Durango, La Plata Co. Airport?",
    choices: [
      { text: "16,000 feet.", correct: false },
      { text: "12,000 feet.", correct: false },
      { text: "15,000 feet.", correct: true }
    ]
  },
  {
    question: "At what point should a VOR changeover be made from JNC VOR to MANCA intersection southbound on V187?",
    choices: [
      { text: "36 NM south of JNC.", correct: false },
      { text: "52 NM south of JNC.", correct: true },
      { text: "74 NM south of JNC.", correct: false }
    ]
  },
  {
    question: "What is the MOCA between JNC and MANCA intersection on V187?",
    choices: [
      { text: "12,000 feet MSL.", correct: false },
      { text: "10,900 feet MSL.", correct: false },
      { text: "13,700 feet MSL.", correct: true }
    ]
  },
  {
    question: "Determine the time to be entered in block 10 of the flight plan. (Refer to FD excerpt and figures.)",
    choices: [
      { text: "54 minutes.", correct: false },
      { text: "1 hour 07 minutes.", correct: false },
      { text: "1 hour 02 minutes.", correct: true }
    ]
  },
  {
    question: "When en route on V448 from YKM VORTAC to BTG VORTAC, what minimum navigation equipment is required to identify ANGOO intersection?",
    choices: [
      { text: "One VOR receiver.", correct: true },
      { text: "Two VOR receivers.", correct: false },
      { text: "One VOR receiver and DME.", correct: false }
    ]
  },
  {
    question: "What is the maximum altitude that you may flight plan an IFR flight on V-86 EASTBOUND between BOZEMAN and BILLINGS VORTACs?",
    choices: [
      { text: "17,000 feet MSL.", correct: true },
      { text: "18,000 feet MSL.", correct: false },
      { text: "14,500 feet MSL.", correct: false }
    ]
  }
];

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
