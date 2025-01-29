export const poseInstructions = {
    Tree: [
        'Start Position: Begin in Mountain Pose, standing balanced with feet firmly on the ground.',
        'Bend One Leg: Lift one foot and place it against the inner thigh of the standing leg, knee pointing outward.',
        'Align & Balance: Bring hands to Anjali Mudra (prayer position) and lengthen your spine.',
        'Hold & Switch: Maintain the pose while breathing steadily, then return to Mountain Pose to switch sides.'
        ],
    Cobra: [
        'Start Position: Lie prone with legs extended and hands under shoulders.',
        'Lift Chest: Inhale, straighten arms, and raise your chest while keeping the pelvis grounded.',
        'Engage Core: Press the tailbone down, lift the sternum, and keep the backbend even.',    
        'Hold & Release: Breathe steadily for 15–30 seconds, then exhale and lower down.'
    ],
    Dog: [
        'Start Position: Begin on hands and knees, hands slightly ahead of shoulders, toes tucked.',
        'Lift Hips: Exhale, lift knees, and raise hips toward the ceiling, keeping a slight bend in the knees. ',
        'Extend & Align: Push thighs back, stretch heels toward the floor, and straighten legs without locking.',
        'Engage Arms & Shoulders: Press palms down, firm arms, and keep the head between upper arms.',
        'Hold & Release: Breathe deeply for 10+ breaths, then exhale and lower into Child’s Pose.',
    
    ],
    Chair: [
        'Start Position: Stand tall, feet slightly wider than hip-width.',
        'Lift Arms: Inhale, raise arms alongside ears, keeping shoulders relaxed.',
        'Bend Knees: Exhale, lower into a squat, keeping thighs parallel and torso slightly forward.',
        'ld & Release: Maintain for 30–60 seconds, then rise back up.'
    ],
    Warrior: [
        'Start Position: Begin in a lunge, front knee bent, back leg straight, and arms raised.',
       'Shift Forward: Bring hands to prayer position, lean forward, and extend back leg in line with hips.',
       'orm a “T”: Keep the standing leg strong, extend arms forward, and gaze downward.'
    ],
    Traingle: [
        'Begin standing, then lightly jump your feet apart to a wide position about three to four feet apart. Turn your left foot out and turn to face that direction. Take a slight bend in your left leg and raise your arms out on your sides, forming a “T” shape.',
        'Straighten through your left leg, then hinge and reach your torso over your left leg as your hips jut back. Rotate your left palm so it faces the ceiling, and gaze out over your left arm.',
        'Maintain a long, straight spine as you reach your left hand to the mat, placing it in front of your left foot. If you feel off balance, bring in your back leg closer to shorten your stance. Gaze towards your right arm, which should be extended overhead. Hold and repeat on the other side.',
    ],
    Shoulderstand: [
        'Set Up: Stack two folded blankets, lie down with shoulders on them, and bend your knees.',
       'Enter Bridge Pose: Lift hips, extend arms, and press palms down.',
        'Lift legsise one leg, place hands on the lower back for support, then lift the other leg.',
        "Lift up through the balls of your feet. Walk your hands further up the back for more stability. Feel the chest reaching towards the chin to support opening the upper back.",
       " Align & Hold: Keep gaze upward, straighten the body, and ensure hips are over shoulders."
    ]
    
}


export const POINTS = {
    NOSE : 0,
    LEFT_EYE : 1,
    RIGHT_EYE : 2,
    LEFT_EAR : 3,
    RIGHT_EAR : 4,
    LEFT_SHOULDER : 5,
    RIGHT_SHOULDER : 6,
    LEFT_ELBOW : 7,
    RIGHT_ELBOW : 8,
    LEFT_WRIST : 9,
    RIGHT_WRIST : 10,
    LEFT_HIP : 11,
    RIGHT_HIP : 12,
    LEFT_KNEE : 13,
    RIGHT_KNEE : 14,
    LEFT_ANKLE : 15,
    RIGHT_ANKLE : 16,
}

export const keypointConnections = {
    nose: ['left_ear', 'right_ear'],
    left_ear: ['left_shoulder'],
    right_ear: ['right_shoulder'],
    left_shoulder: ['right_shoulder', 'left_elbow', 'left_hip'],
    right_shoulder: ['right_elbow', 'right_hip'],
    left_elbow: ['left_wrist'],
    right_elbow: ['right_wrist'],
    left_hip: ['left_knee', 'right_hip'],
    right_hip: ['right_knee'],
    left_knee: ['left_ankle'],
    right_knee: ['right_ankle']
}