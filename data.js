const data = {
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
                            body: [],
                        },
                    ],
                },
                {
                    method: 'POST',
                    url: '/',
                    description: 'Create new post',
                    requestBody: {
                        organisation: 'integer',
                        annotationSet: '',
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
                            body: {},
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
                            body: {},
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
                            body: [],
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
                            body: {},
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
                            body: [],
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
                            body: {},
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
                            body: {},
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
                            body: {},
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
                            body: [],
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
                            body: {},
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
                            body: {},
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
                            body: {},
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
                            body: {},
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/organization',
                    description: "Update logged in user's organization details",
                    requestBody: { name: 'string', url: 'string', primaryColor: 'string' },
                    responses: [
                        {
                            code: 200,
                            body: {},
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
                            body: {},
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/organization/emailHeader',
                    description: "Update logged in user's organization email header",
                    requestBody: { file: 'File' },
                    responses: [
                        {
                            code: 200,
                            body: {},
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
                            body: {},
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
                            body: {},
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
                    requestBody: {},
                    responses: [
                        {
                            code: 200,
                            body: {},
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/:invitationLink',
                    description: 'Create user using invitation link',
                    params: [
                        {
                            name: 'invitationLink',
                            description: 'string',
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
                            body: {},
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
                            body: {},
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
                            body: {},
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
                            body: {},
                        },
                    ],
                },
                {
                    method: 'POST',
                    url: '/',
                    description: 'Generate a new ticket',
                    requestBody: {},
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
                            body: {},
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
