const ErrorModel = {
    timestamp: 'integer',
    status: 'integer',
    message: 'string',
};

const FieldsErrorModel = [
    {
        param: 'string',
        message: 'string',
    },
];

const CommentModel = {
    id: 'integer',
    comment: 'string',
    datetime: 'Date',
    user: {
        id: 'integer',
        name: 'string',
        dp: 'string',
    },
};

const ProgressLineModel = {
    id: 'integer',
    postText: 'string',
    imageUrl: 'string',
    hasAnnotation: 'boolean',
    annotationUrl: 'string',
    fromMobile: 'boolean',
    datetime: 'Date',
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
    comments: [CommentModel],
};

const SuperProjectModel = {
    id: 'integer',
    name: 'string',
    imageUrl: 'string',
    location: 'string',
    isCctv: 'boolean',
};

const ProjectModel = {
    id: 'integer',
    name: 'string',
    imageUrl: 'string',
    location: 'string',
    isCctv: 'boolean',
    isDroneProject: 'boolean',
};

const CameraModel = {
    id: 'integer',
    cameraName: 'string',
    installationDate: 'Date',
    latestImageUrl: 'string',
    latestImageTakenAt: 'Date',
    type: 'string',
};

const CameraImageModel = {
    id: 'integer',
    urlPreview: 'string',
    urlThumb: 'string',
    url4k: 'string',
    datetime: 'Date',
};

const ProfileModel = {
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
};

const OrganizationModel = {
    id: 'integer',
    name: 'string',
    logo: 'string',
    bgImage: 'string',
    emailHeaderLogo: 'string',
    url: 'string',
    navColor: 'string',
};

const UserModel = {
    id: 'integer',
    name: 'string',
    username: 'string',
    email: 'string',
    dp: 'string',
    designation: 'string',
    umPermission: 'boolean',
    configPermission: 'boolean',
    sharePermission: 'boolean',
    supportPermission: 'boolean',
    saveImagePermission: 'boolean',
    teamId: 'integer',
    projectIds: ['integer'],
};

const TeamModel = {
    id: 'integer',
    teamName: 'string',
};

const SupportTicketModel = {
    id: 'integer',
    helpTopic: 'string',
    subject: 'string',
    issueDetail: 'string',
    cameraName: 'string',
    status: 'string',
    datetime: 'Date',
};

const SupportTicketReplyModel = {
    id: 'integer',
    commentBy: 'string',
    commentByUserId: 'string',
    comment: 'string',
    datetime: 'Date',
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
                            code: '200',
                            body: {
                                count: 'integer',
                                rows: [ProgressLineModel],
                            },
                        },
                    ],
                },
                {
                    method: 'POST',
                    url: '/',
                    description: 'Create new post',
                    headers: [
                        {
                            name: 'Content-Type',
                            description: 'multipart/form-data',
                        },
                    ],
                    requestBody: {
                        organisation: 'integer',
                        fromMobile: 'boolean',
                        postText: 'string',
                        imageUrl: 'string',
                        cameraId: 'integer',
                        annotationContent: 'File',
                    },
                    responses: [
                        {
                            code: '200',
                            body: {},
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
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
                            code: '200',
                            body: ProgressLineModel,
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
                            code: '200',
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
                            code: '200',
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
                        comment: 'string',
                    },
                    responses: [
                        {
                            code: '200',
                            body: CommentModel,
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
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
                            code: '200',
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
                            code: '200',
                            body: [SuperProjectModel],
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
                            code: '200',
                            body: {
                                ...SuperProjectModel,
                                projects: [ProjectModel],
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
                            code: '200',
                            body: [ProjectModel],
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
                            code: '200',
                            body: {
                                ...ProjectModel,
                                cameras: [CameraModel],
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
                            code: '200',
                            body: {},
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
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
                            code: '200',
                            body: {
                                id: 'integer',
                                cameraName: 'string',
                                type: 'string',
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
                            code: '200',
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
                            code: '200',
                            body: [CameraImageModel],
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
                            code: '200',
                            body: [CameraImageModel],
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
                            code: '200',
                            body: ProfileModel,
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
                            code: '200',
                            body: ProfileModel,
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/dp',
                    description: "Update logged in user's dp",
                    headers: [
                        {
                            name: 'Content-Type',
                            description: 'multipart/form-data',
                        },
                    ],
                    requestBody: { dp: 'File' },
                    responses: [
                        {
                            code: '200',
                            body: {
                                dp: 'string',
                            },
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
                        },
                    ],
                },
                {
                    method: 'GET',
                    url: '/organization',
                    description: "Get logged in user's organization details",
                    responses: [
                        {
                            code: '200',
                            body: OrganizationModel,
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
                            code: '200',
                            body: OrganizationModel,
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/organization/logo',
                    description: "Update logged in user's organization logo",
                    headers: [
                        {
                            name: 'Content-Type',
                            description: 'multipart/form-data',
                        },
                    ],
                    requestBody: { logo: 'File' },
                    responses: [
                        {
                            code: '200',
                            body: {
                                logo: 'string',
                            },
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
                        },
                    ],
                },
                {
                    method: 'PUT',
                    url: '/organization/emailHeaderLogo',
                    description: "Update logged in user's organization email header",
                    headers: [
                        {
                            name: 'Content-Type',
                            description: 'multipart/form-data',
                        },
                    ],
                    requestBody: { emailHeaderLogo: 'File' },
                    responses: [
                        {
                            code: '200',
                            body: {
                                emailHeaderLogo: 'string',
                            },
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
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
                            code: '200',
                            body: '',
                        },
                        {
                            code: '400',
                            body: ErrorModel,
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
                            code: '200',
                            body: ProfileModel,
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
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
                            code: '200',
                            body: '',
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
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
                            code: '200',
                            body: '',
                        },
                        {
                            code: '400',
                            body: ErrorModel,
                        },
                    ],
                },
                {
                    method: 'POST',
                    url: '/:invitationLink',
                    description: 'Create user using invitation link',
                    headers: [
                        {
                            name: 'Content-Type',
                            description: 'multipart/form-data',
                        },
                    ],
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
                            code: '200',
                            body: '',
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
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
                            code: '200',
                            body: UserModel,
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
                            code: '200',
                            body: '',
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
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
                            code: '200',
                            body: '',
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
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
                            code: '200',
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
                            code: '200',
                            body: {
                                ...TeamModel,
                            },
                        },
                        {
                            code: '200 (includeMembers=true)',
                            body: {
                                ...TeamModel,
                                users: [
                                    {
                                        id: 'integer',
                                        name: 'string',
                                        username: 'string',
                                        email: 'string',
                                        dp: 'string',
                                    },
                                ],
                            },
                        },
                    ],
                },
                {
                    method: 'POST',
                    url: '/',
                    description: 'Create a new team',
                    requestBody: {
                        teamName: 'string',
                    },
                    responses: [
                        {
                            code: '200',
                            body: TeamModel,
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
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
                    requestBody: {
                        teamName: 'string',
                    },
                    responses: [
                        {
                            code: '200',
                            body: TeamModel,
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
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
                            code: '200',
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
                            code: '200',
                            body: [SupportTicketModel],
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
                            code: '200',
                            body: SupportTicketModel,
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
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
                            code: '200',
                            body: {
                                ...SupportTicketModel,
                                replies: [SupportTicketReplyModel],
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
                    requestBody: {
                        comment: 'string',
                    },
                    responses: [
                        {
                            code: '200',
                            body: SupportTicketReplyModel,
                        },
                        {
                            code: '400',
                            body: FieldsErrorModel,
                        },
                    ],
                },
            ],
        },
    ],
};
