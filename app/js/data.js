var week_initvalue = 7;
var week_array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var table = [
    {
        col1: ['DAY 21', 'DAY 23', 'DAY 24', 'DAY 25', 'DAY 26', 'DAY 27', 'DAY 28'],
        row: [
            [
                { type: 'time', description: '6:00', rowspan: '' },
                { type: 'done', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-active.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: '#' },
                { type: 'todo', description: 'Bod·e Shake', image: '#' },
                { type: 'freeday', description: 'GUILT-FREE DAY', image: '#' }
            ],
            [
                { type: 'time', description: '12:00', rowspan: '' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
            ],
            [
                { type: 'time', description: '9:00', rowspan: '' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Body', image: './images/bade-inactive.png' },
            ],
            [
                { type: 'time', description: '3:00', rowspan: '' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
            ],
            [
                { type: 'time', description: '6:00', rowspan: '2' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
                { type: 'todo', description: 'test', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
            ]
        ],
        row7: ['LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'HIGH-CARB', 'LOW-CARB', 'LOW-CARB']
    },
    {
        col1: ['DAY 29', 'DAY 30', 'DAY 31', 'DAY 32', 'DAY 33', 'DAY 34', 'DAY 35'],
        row: [
            [
                { type: 'time', description: '6:00', rowspan: '' },
                { type: 'done', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-active.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: '#' },
                { type: 'todo', description: 'Bod·e Shake', image: '#' },
                { type: 'freeday', description: 'GUILT-FREE DAY', image: '#' }
            ],
            [
                { type: 'time', description: '12:00', rowspan: '' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
            ],
            [
                { type: 'time', description: '9:00', rowspan: '' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Body', image: './images/bade-inactive.png' },
            ],
            [
                { type: 'time', description: '3:00', rowspan: '' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
            ],
            [
                { type: 'time', description: '6:00', rowspan: '2' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
                { type: 'todo', description: 'test', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
            ]
        ],
        row7: ['LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'HIGH-CARB', 'LOW-CARB', 'LOW-CARB']
    },
    {
        col1: ['DAY 36', 'DAY 37', 'DAY 38', 'DAY 39', 'DAY 40', 'DAY 41', 'DAY 42'],
        row: [
            [
                { type: 'time', description: '6:00', rowspan: '' },
                { type: 'done', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-active.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: '#' },
                { type: 'todo', description: 'Bod·e Shake', image: '#' },
                { type: 'freeday', description: 'GUILT-FREE DAY', image: '#' }
            ],
            [
                { type: 'time', description: '12:00', rowspan: '' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
            ],
            [
                { type: 'time', description: '9:00', rowspan: '' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Body', image: './images/bade-inactive.png' },
            ],
            [
                { type: 'time', description: '3:00', rowspan: '' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
            ],
            [
                { type: 'time', description: '6:00', rowspan: '2' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
                { type: 'todo', description: 'test', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
            ]
        ],
        row7: ['LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'HIGH-CARB', 'LOW-CARB', 'LOW-CARB']
    },
    {
        col1: ['DAY 43', 'DAY 44', 'DAY 45', 'DAY 46', 'DAY 47', 'DAY 48', 'DAY 49'],
        row: [
            [
                { type: 'time', description: '6:00', rowspan: '' },
                { type: 'done', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-active.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: '#' },
                { type: 'todo', description: 'Bod·e Shake', image: '#' },
                { type: 'freeday', description: 'GUILT-FREE DAY', image: '#' }
            ],
            [
                { type: 'time', description: '12:00', rowspan: '' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
            ],
            [
                { type: 'time', description: '9:00', rowspan: '' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Body', image: './images/bade-inactive.png' },
            ],
            [
                { type: 'time', description: '3:00', rowspan: '' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
            ],
            [
                { type: 'time', description: '6:00', rowspan: '2' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
                { type: 'todo', description: 'test', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
            ]
        ],
        row7: ['LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'HIGH-CARB', 'LOW-CARB', 'LOW-CARB']
    },
    {
        col1: ['DAY 50', 'DAY 51', 'DAY 52', 'DAY 53', 'DAY 54', 'DAY 55', 'DAY 56'],
        row: [
            [
                { type: 'time', description: '6:00', rowspan: '' },
                { type: 'done', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-active.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: '#' },
                { type: 'todo', description: 'Bod·e Shake', image: '#' },
                { type: 'freeday', description: 'GUILT-FREE DAY', image: '#' }
            ],
            [
                { type: 'time', description: '12:00', rowspan: '' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
            ],
            [
                { type: 'time', description: '9:00', rowspan: '' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Body', image: './images/bade-inactive.png' },
            ],
            [
                { type: 'time', description: '3:00', rowspan: '' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
            ],
            [
                { type: 'time', description: '6:00', rowspan: '2' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
                { type: 'todo', description: 'test', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
            ]
        ],
        row7: ['LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'HIGH-CARB', 'LOW-CARB', 'LOW-CARB']
    },
    {
        col1: ['DAY 57', 'DAY 58', 'DAY 59', 'DAY 60', 'DAY 61', 'DAY 62', 'DAY 63'],
        row: [
            [
                { type: 'time', description: '6:00', rowspan: '' },
                { type: 'done', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'done', description: 'Bod·e Shake', image: './images/bade-active.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: '#' },
                { type: 'todo', description: 'Bod·e Shake', image: '#' },
                { type: 'freeday', description: 'GUILT-FREE DAY', image: '#' }
            ],
            [
                { type: 'time', description: '12:00', rowspan: '' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
            ],
            [
                { type: 'time', description: '9:00', rowspan: '' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Body', image: './images/bade-inactive.png' },
            ],
            [
                { type: 'time', description: '3:00', rowspan: '' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
            ],
            [
                { type: 'time', description: '6:00', rowspan: '2' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
                { type: 'todo', description: 'test', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
            ]
        ],
        row7: ['LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'HIGH-CARB', 'LOW-CARB', 'LOW-CARB']
    },
    {
        col1: ['DAY 64', 'DAY 65', 'DAY 66', 'DAY 67', 'DAY 68', 'DAY 69', 'DAY 70'],
        row: [
            [
                { type: 'time', description: '6:00', rowspan: '' },
                { type: 'done', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'active', description: 'Bod·e Shake', image: './images/bade-active.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'freeday', description: 'GUILT-FREE DAY', image: '#' }
            ],
            [
                { type: 'time', description: '12:00', rowspan: '' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'active', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
            ],
            [
                { type: 'time', description: '9:00', rowspan: '' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'active', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
            ],
            [
                { type: 'time', description: '3:00', rowspan: '' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'active', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
            ],
            [
                { type: 'time', description: '6:00', rowspan: '2' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'active', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
            ]
        ],
        row7: ['LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'LOW-CARB']
    },
    {
        col1: ['DAY 71', 'DAY 72', 'DAY 73', 'DAY 74', 'DAY 75', 'DAY 76', 'DAY 77'],
        row: [
            [
                { type: 'time', description: '6:00', rowspan: '' },
                { type: 'done', description: 'test', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'test', image: './images/bade-active.png' },
                { type: 'todo', description: 'test', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'test', image: '#' },
                { type: 'todo', description: 'test', image: '#' },
                { type: 'todo', description: 'test', image: './images/bade-inactive.png' },
                { type: 'freeday', description: 'GUILT-FREE DAY', image: '#' }
            ],
            [
                { type: 'time', description: '12:00', rowspan: '' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
            ],
            [
                { type: 'time', description: '9:00', rowspan: '' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
            ],
            [
                { type: 'time', description: '3:00', rowspan: '' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
            ],
            [
                { type: 'time', description: '6:00', rowspan: '2' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
            ]
        ],
        row7: ['LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'HIGH-CARB', 'LOW-CARB', 'LOW-CARB']
    },
    {
        col1: ['DAY 78', 'DAY 79', 'DAY 80', 'DAY 81', 'DAY 82', 'DAY 83', 'DAY 84'],
        row: [
            [
                { type: 'time', description: '6:00', rowspan: '' },
                { type: 'done', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'active', description: 'Bod·e Shake', image: './images/bade-active.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'freeday', description: 'GUILT-FREE DAY', image: '#' }
            ],
            [
                { type: 'time', description: '12:00', rowspan: '' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'active', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
            ],
            [
                { type: 'time', description: '9:00', rowspan: '' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'active', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
            ],
            [
                { type: 'time', description: '3:00', rowspan: '' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'active', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
            ],
            [
                { type: 'time', description: '6:00', rowspan: '2' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'active', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
            ]
        ],
        row7: ['LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'HIGH-CARB', 'LOW-CARB', 'LOW-CARB']
    },
    {
        col1: ['DAY 85', 'DAY 86', 'DAY 87', 'DAY 88', 'DAY 89', 'DAY 90', 'DAY 91'],
        row: [
            [
                { type: 'time', description: '6:00', rowspan: '' },
                { type: 'done', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-active.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'freeday', description: 'GUILT-FREE DAY', image: '#' }
            ],
            [
                { type: 'time', description: '12:00', rowspan: '' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
            ],
            [
                { type: 'time', description: '9:00', rowspan: '' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
            ],
            [
                { type: 'time', description: '3:00', rowspan: '' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
            ],
            [
                { type: 'time', description: '6:00', rowspan: '2' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
            ]
        ],
        row7: ['LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'HIGH-CARB', 'LOW-CARB', 'LOW-CARB']
    },
    {
        col1: ['DAY 92', 'DAY 93', 'DAY 94', 'DAY 95', 'DAY 96', 'DAY 97', 'DAY 98'],
        row: [
            [
                { type: 'time', description: '6:00', rowspan: '' },
                { type: 'done', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-active.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'freeday', description: 'GUILT-FREE DAY', image: '#' }
            ],
            [
                { type: 'time', description: '12:00', rowspan: '' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
            ],
            [
                { type: 'time', description: '9:00', rowspan: '' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
            ],
            [
                { type: 'time', description: '3:00', rowspan: '' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
            ],
            [
                { type: 'time', description: '6:00', rowspan: '2' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
            ]
        ],
        row7: ['LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'HIGH-CARB', 'LOW-CARB', 'LOW-CARB']
    },
    {
        col1: ['DAY 99', 'DAY 100', 'DAY 101', 'DAY 102', 'DAY 103', 'DAY 104', 'DAY 105'],
        row: [
            [
                { type: 'time', description: '6:00', rowspan: '' },
                { type: 'done', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-active.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod·e Shake', image: './images/bade-inactive.png' },
                { type: 'freeday', description: 'GUILT-FREE DAY', image: '#' }
            ],
            [
                { type: 'time', description: '12:00', rowspan: '' },
                { type: 'done', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Ham and Swiss Roll Ups', image: '#' },
                { type: 'todo', description: 'Grilled Steak (HC)', image: '#' },
            ],
            [
                { type: 'time', description: '9:00', rowspan: '' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
                { type: 'todo', description: 'Bod⋅ē Shake', image: './images/bade-inactive.png' },
            ],
            [
                { type: 'time', description: '3:00', rowspan: '' },
                { type: 'done', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn with Mozzarella and Tomato Slices', image: '#' },
                { type: 'todo', description: 'Bod⋅ē Burn and Whole-Wheat English Muffin with Butter Spray', image: '#' },
            ],
            [
                { type: 'time', description: '6:00', rowspan: '2' },
                { type: 'done', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Turkey Melt', image: '#' },
                { type: 'todo', description: 'Garlic Lime Chicken (HC)', image: '#' },
            ]
        ],
        row7: ['LOW-CARB', 'LOW-CARB', 'LOW-CARB', 'HIGH-CARB', 'LOW-CARB', 'LOW-CARB']
    }
]