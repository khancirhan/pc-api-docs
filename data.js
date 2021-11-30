const errorModel = {
    timestamp: 'integer',
    status: 'integer',
    message: 'string',
};

const data = {
    documentTitle: 'ProgressCenter API Docs',
    heading: 'ProgressCenter',
    url: 'https://api.progresscenter.io',
    modules: [
        // ProgressLine
        {
            title: 'ProgressLine -  /progressLine',
            endpoints: [
                {
                    method: 'GET',
                    url: '/?offset=<num>&limit=<num>',
                    description: 'Get paginated posts along with comments, user-likes, and posted by user',
                    params: [
                        {
                            name: 'offset',
                            description: 'integer',
                        },
                        {
                            name: 'limit',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: {
                                count: 'integer',
                                rows: [
                                    {
                                        id: 'integer',
                                        postText: 'string',
                                        imageUrl: 'string',
                                        hasAnnotation: 'boolean',
                                        annotationContent: 'string',
                                        fromMobile: 'boolean',
                                        datetime: 'string',
                                        cameraId: 'integer',
                                        author: {
                                            id: 'integer',
                                            name: 'string',
                                            dp: 'string',
                                            designation: 'string',
                                        },
                                        userLikes: [
                                            {
                                                id: 'integer',
                                                name: 'string',
                                                dp: 'string',
                                            },
                                        ],
                                        comments: [
                                            {
                                                id: 'integer',
                                                comment: 'string',
                                                datetime: 'string',
                                                user: {
                                                    id: 'integer',
                                                    name: 'string',
                                                    dp: 'string',
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    method: 'POST',
                    url: '/',
                    description: 'Create new post',
                    requestBody: {
                        organisation: 'integer',
                        annotationSet: 'File',
                        fromMobile: 'boolean',
                        postText: 'string',
                        imageUrl: 'string',
                        cameraId: 'integer',
                    },
                    responses: [
                        {
                            code: 200,
                            body: {},
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/:id',
                    description: 'Get single post with comments, user-likes, and posted by user',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                postText: 'string',
                                imageUrl: 'string',
                                hasAnnotation: 'boolean',
                                annotationContent: 'string',
                                fromMobile: 'boolean',
                                datetime: 'string',
                                cameraId: 'integer',
                                author: {
                                    id: 'integer',
                                    name: 'string',
                                    designation: 'string',
                                    dp: 'string',
                                },
                                userLikes: [
                                    {
                                        id: 'integer',
                                        name: 'string',
                                        dp: 'string',
                                    },
                                ],
                                comments: [
                                    {
                                        id: 'integer',
                                        comment: 'string',
                                        datetime: 'string',
                                        user: {
                                            id: 'integer',
                                            name: 'string',
                                            dp: 'string',
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    method: 'DELETE',
                    url: '/:id',
                    description: 'Delete post',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: '',
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/:id/like',
                    description: 'Toggle post like for logged in user',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: '',
                        },
                    ],
                },
                {
                    method: 'POST',
                    url: '/:id/comment',
                    description: 'Add comment to post',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    requestBody: {
                        message: 'string',
                    },
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                comment: 'string',
                                datetime: 'string',
                                user: {
                                    id: 'integer',
                                    name: 'string',
                                    dp: 'string',
                                },
                            },
                        },
                    ],
                },
                {
                    method: 'DELETE',
                    url: '/:id/comment/:commentId',
                    description: 'Delete comment from post',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                        {
                            name: 'commentId',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: '',
                        },
                    ],
                },
            ],
        },
        // Super Project
        {
            title: 'Super Project -  /superProjects',
            endpoints: [
                {
                    method: 'GET',
                    url: '/',
                    description: 'Get all super projects assigned to the logged in user',
                    responses: [
                        {
                            code: 200,
                            body: [
                                {
                                    id: 'integer',
                                    name: 'string',
                                    projectImage: 'string',
                                    location: 'string',
                                    loginStatus: 'string',
                                    sortSeq: 'string',
                                    camSort: 'string',
                                },
                            ],
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/:id',
                    description: 'Get super project by id along with project list',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                name: 'string',
                                projectImage: 'string',
                                location: 'string',
                                loginStatus: 'string',
                                sortSeq: 'string',
                                camSort: 'string',
                                projects: [
                                    {
                                        id: 'integer',
                                        name: 'string',
                                        projectImage: 'string',
                                        location: 'string',
                                        loginStatus: 'string',
                                        sortSeq: 'string',
                                        camSort: 'string',
                                        isDroneProject: 'boolean',
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        // Project
        {
            title: 'Project -  /projects',
            endpoints: [
                {
                    method: 'GET',
                    url: '/',
                    description: 'Get all projects assigned to the logged in user',
                    responses: [
                        {
                            code: 200,
                            body: [
                                {
                                    id: 'integer',
                                    name: 'string',
                                    projectImage: 'string',
                                    location: 'string',
                                    loginStatus: 'string',
                                    sortSeq: 'string',
                                    camSort: 'string',
                                    isDroneProject: 'boolean',
                                },
                            ],
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/:id',
                    description: 'Get project by id along with camera list',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                name: 'string',
                                projectImage: 'string',
                                location: 'string',
                                loginStatus: 'string',
                                sortSeq: 'string',
                                camSort: 'string',
                                isDroneProject: 'boolean',
                                cameras: [
                                    {
                                        id: 'integer',
                                        cameraName: 'string',
                                        latestImage: 'string',
                                        installDate: 'string',
                                        installDateJs: 'string',
                                        type: 'string',
                                        status: 'string',
                                        sortSeq: 'string',
                                    },
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        // Camera
        {
            title: 'Camera -  /projects/:projectId/cameras',
            endpoints: [
                {
                    method: 'POST',
                    url: '/',
                    description: 'Add camera under the project',
                    params: [
                        {
                            name: 'projectId',
                            description: 'integer',
                        },
                    ],
                    requestBody: {
                        name: 'string',
                        installationDate: 'Date',
                        powerSource: 'string',
                        mounting: 'string',
                    },
                    responses: [
                        {
                            code: 200,
                            body: {},
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/:id',
                    description: 'Get camera by id along with project',
                    params: [
                        {
                            name: 'projectId',
                            description: 'integer',
                        },
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                cameraName: 'string',
                                type: 'string',
                                status: 'string',
                                project: {
                                    id: 'integer',
                                    name: 'string',
                                },
                            },
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/:id/weather',
                    description: 'Get weather information for the camera',
                    params: [
                        {
                            name: 'projectId',
                            description: 'integer',
                        },
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: {
                                location: 'string',
                                climate: 'string',
                                temperature: 'integer',
                            },
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/:id/images?date=<YYYYMMDD>',
                    description:
                        'Get images on a particular date (if date is not present, return images of the latest taken date)',
                    params: [
                        {
                            name: 'projectId',
                            description: 'integer',
                        },
                        {
                            name: 'id',
                            description: 'integer',
                        },
                        {
                            name: 'date',
                            description: 'string',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: [
                                {
                                    id: 'integer',
                                    urlPreview: 'string',
                                    urlThumb: 'string',
                                    url4k: 'string',
                                    date: 'string',
                                    time: 'string',
                                },
                            ],
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/:id/progressSlider ',
                    description: 'Get images for progress slider',
                    params: [
                        {
                            name: 'projectId',
                            description: 'integer',
                        },
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: [
                                {
                                    id: 'integer',
                                    urlPreview: 'string',
                                    urlThumb: 'string',
                                    url4k: 'string',
                                    date: 'string',
                                    time: 'string',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        // Profile
        {
            title: 'Profile -  /',
            endpoints: [
                {
                    method: 'GET',
                    url: '/profile',
                    description: "Get logged in user's profile",
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                name: 'string',
                                email: 'string',
                                phoneNumber: 'string',
                                timezone: 'string',
                                dp: 'string',
                                designation: 'string',
                                dob: 'Date',
                                primaryColor: 'string',
                                view4k: 'boolean',
                                timestampOnLivelapse: 'boolean',
                                showProgressline: 'boolean',
                                darkMode: 'boolean',
                                adaptiveDarkMode: 'boolean',
                            },
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/profile',
                    description: "Update logged in user's profile",
                    requestBody: {
                        name: 'string',
                        email: 'string',
                        phoneNumber: 'string',
                        timezone: 'string',
                        designation: 'string',
                        dob: 'Date',
                        primaryColor: 'string',
                        view4k: 'boolean',
                        timestampOnLivelapse: 'boolean',
                        showProgressline: 'boolean',
                        darkMode: 'boolean',
                        adaptiveDarkMode: 'boolean',
                    },
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                name: 'string',
                                email: 'string',
                                phoneNumber: 'string',
                                timezone: 'string',
                                dp: 'string',
                                designation: 'string',
                                dob: 'Date',
                                primaryColor: 'string',
                                view4k: 'boolean',
                                timestampOnLivelapse: 'boolean',
                                showProgressline: 'boolean',
                                darkMode: 'boolean',
                                adaptiveDarkMode: 'boolean',
                            },
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/dp',
                    description: "Update logged in user's dp",
                    requestBody: { file: 'File' },
                    responses: [
                        {
                            code: 200,
                            body: {
                                dp: 'string',
                            },
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/organization',
                    description: "Get logged in user's organization details",
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                name: 'string',
                                logo: 'string',
                                bgImage: 'string',
                                emailHeaderLogo: 'string',
                                url: 'string',
                                navColor: 'string',
                            },
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/organization',
                    description: "Update logged in user's organization details",
                    requestBody: { name: 'string', url: 'string', navColor: 'string' },
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                name: 'string',
                                logo: 'string',
                                bgImage: 'string',
                                emailHeaderLogo: 'string',
                                url: 'string',
                                navColor: 'string',
                            },
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/organization/logo',
                    description: "Update logged in user's organization logo",
                    requestBody: { file: 'File' },
                    responses: [
                        {
                            code: 200,
                            body: {
                                logo: 'string',
                            },
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/organization/emailHeaderLogo',
                    description: "Update logged in user's organization email header",
                    requestBody: { file: 'File' },
                    responses: [
                        {
                            code: 200,
                            body: {
                                emailHeaderLogo: 'string',
                            },
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/password',
                    description: "Change logged in user's password",
                    requestBody: { currentPassword: 'string', newPassword: 'string' },
                    responses: [
                        {
                            code: 200,
                            body: '',
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/upgradeV3',
                    description: 'Migrate user from v2 to v3',
                    requestBody: { teamName: 'string', timezone: 'string' },
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                name: 'string',
                                email: 'string',
                                phoneNumber: 'string',
                                timezone: 'string',
                                dp: 'string',
                                designation: 'string',
                                dob: 'Date',
                                primaryColor: 'string',
                                view4k: 'boolean',
                                timestampOnLivelapse: 'boolean',
                                showProgressline: 'boolean',
                                darkMode: 'boolean',
                                adaptiveDarkMode: 'boolean',
                            },
                        },
                    ],
                },
            ],
        },
        // User
        {
            title: 'User -  /users',
            endpoints: [
                {
                    method: 'POST',
                    url: '/invite',
                    description: 'Create and send invitation link to the user',
                    requestBody: {
                        umPermission: 'boolean',
                        configPermission: 'boolean',
                        sharePermission: 'boolean',
                        supportPermission: 'boolean',
                        saveImagePermission: 'boolean',
                        email: 'string',
                        projectIds: ['integer'],
                        signupUrl: 'string',
                        teamId: 'integer',
                    },
                    responses: [
                        {
                            code: 200,
                            body: '',
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/:invitationLink/validate',
                    description: 'Validate invitation link',
                    params: [
                        {
                            name: 'invitationLink',
                            description: 'string',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: '',
                        },
                        {
                            code: 400,
                            body: errorModel,
                        },
                    ],
                },
                {
                    method: 'POST',
                    url: '/:invitationLink',
                    description: 'Create user using invitation link',
                    params: [
                        {
                            name: 'invitationLink',
                            description: 'string',
                        },
                    ],
                    requestBody: {
                        name: 'string',
                        username: 'string',
                        password: 'string',
                        designation: 'string',
                        timezone: 'string',
                        dp: 'File',
                    },
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'string',
                                name: 'string',
                                username: 'string',
                                password: 'string',
                                designation: 'string',
                                timezone: 'string',
                                dp: 'File',
                            },
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/:id',
                    description: 'Get user details',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                name: 'string',
                                email: 'string',
                                phoneNumber: 'string',
                                timezone: 'string',
                                dp: 'string',
                                designation: 'string',
                                dob: 'Date',
                                primaryColor: 'string',
                                view4k: 'boolean',
                                timestampOnLivelapse: 'boolean',
                                showProgressline: 'boolean',
                                darkMode: 'boolean',
                                adaptiveDarkMode: 'boolean',
                                umPermission: 'boolean',
                                configPermission: 'boolean',
                                sharePermission: 'boolean',
                                supportPermission: 'boolean',
                                saveImagePermission: 'boolean',
                                teamId: 'integer',
                            },
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/:id/permissions',
                    description: "Update user's permissions",
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    requestBody: {
                        umPermission: 'boolean',
                        saveImagePermission: 'boolean',
                        sharePermission: 'boolean',
                        supportPermission: 'boolean',
                    },
                    responses: [
                        {
                            code: 200,
                            body: '',
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/:id/projects',
                    description: "Update user's permissions",
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    requestBody: { projectsIds: ['integer'] },
                    responses: [
                        {
                            code: 200,
                            body: '',
                        },
                    ],
                },
                {
                    method: 'DELETE',
                    url: '/:id',
                    description: 'Delete user',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: '',
                        },
                    ],
                },
            ],
        },
        // Team
        {
            title: 'Team -  /teams',
            endpoints: [
                {
                    method: 'GET',
                    url: '/?includeMembers=<boolean>',
                    description:
                        'Get all teams (optionally with members, if includeMembers is present in query params and is truthy)',
                    params: [
                        {
                            name: 'includeMembers',
                            description: 'boolean',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: {},
                        },
                    ],
                },
                {
                    method: 'POST',
                    url: '/',
                    description: 'Create a new team',
                    requestBody: {},
                    responses: [
                        {
                            code: 200,
                            body: {},
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/:id',
                    description: 'Update team',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    requestBody: {},
                    responses: [
                        {
                            code: 200,
                            body: {},
                        },
                    ],
                },
                {
                    method: 'DELETE',
                    url: '/:id',
                    description: 'Delete team',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: '',
                        },
                    ],
                },
            ],
        },
        // Support
        {
            title: 'Support -  /support',
            endpoints: [
                {
                    method: 'GET',
                    url: '/',
                    description: 'Get all support tickets',
                    responses: [
                        {
                            code: 200,
                            body: [
                                {
                                    id: 'integer',
                                    helpTopic: 'string',
                                    subject: 'string',
                                    issueDetail: 'string',
                                    cameraName: 'string',
                                    status: 'string',
                                    dateTimestamp: 'string',
                                },
                            ],
                        },
                    ],
                },
                {
                    method: 'POST',
                    url: '/',
                    description: 'Generate a new ticket',
                    requestBody: {
                        helpTopic: 'string',
                        subject: 'string',
                        issueDetail: 'string',
                        cameraName: 'string',
                    },
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                helpTopic: 'string',
                                subject: 'string',
                                issueDetail: 'string',
                                cameraName: 'string',
                                status: 'string',
                                dateTimestamp: 'string',
                                phone: 'string',
                                ext: 'string',
                            },
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/:id',
                    description: 'Get support ticket by id along with replies',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    responses: [
                        {
                            code: 200,
                            body: {
                                id: 'integer',
                                helpTopic: 'string',
                                subject: 'string',
                                issueDetail: 'string',
                                cameraName: 'string',
                                status: 'string',
                                dateTimestamp: 'string',
                                phone: 'string',
                                ext: 'string',
                                replies: [
                                    {
                                        id: 'integer',
                                        type: 'string',
                                        commentBy: 'string',
                                        commentByUserId: 'string',
                                        comment: 'string',
                                        dateTimestamp: 'string',
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    method: 'POST',
                    url: '/:id/reply',
                    description: 'Add reply to ticket',
                    params: [
                        {
                            name: 'id',
                            description: 'integer',
                        },
                    ],
                    requestBody: {},
                    responses: [
                        {
                            code: 200,
                            body: {},
                        },
                    ],
                },
            ],
        },
    ],
};
