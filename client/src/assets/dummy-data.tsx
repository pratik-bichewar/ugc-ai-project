import { UploadIcon, VideoIcon, ZapIcon } from 'lucide-react';

export const featuresData = [
    {
        icon: <UploadIcon className="w-6 h-6" />,
        title: 'Smart upload',
        desc: 'Drag and drop your assets. We auto-optimize formats and sizes.'
    },
    {
        icon: <ZapIcon className="w-6 h-6" />,
        title: 'Instant generation',
        desc: 'Optimized models deliver output in seconds with great fidelity.'
    },
    {
        icon: <VideoIcon className="w-6 h-6" />,
        title: 'Video synthesis',
        desc: 'Bring product shots to life with short-form social-ready videos.'
    }
];

export const plansData = [
    {
        id: 'starter',
        name: 'Starter',
        price: '$0',
        desc: 'Try the platform at no cost.',
        credits:25,
        features: [
            '25 credits',
            'standard quality',
            'No watermark',
            'slower generation speed',
            'Email support'
        ]
    },
    {
        id: 'pro',
        name: 'pro',
        price: '$19',
        desc: 'Creators and small teams.',
        credits: 80,
        features: [
            '80 credits',
            'HD quality',
            'no watermark',
            'Video generation',
            'Priority support'
        ],
        popular: true
    },
    {
        id: 'ultra',
        name: 'ultra',
        price: '$49',
        desc: 'Scale across teams and agencies.',
        credits: 300,
        features: [
            '300 credits',
            'FHD quality',
            'no watermark',
            'Fast generation speed',
            'Chat + Email support'
        ]
    }
];

export const faqData = [
    {
        question: 'How does AI-generation works?',
        answer: 'We leverage state-of-the-art diffusion models trained on millions of images and videos to blend your product realistic scenes while preserving quality and details.'
    },
    {
        question: 'Do i own generated images?',
        answer: 'Yes, you own all generated images and videos. No watermark is added to any output.'
    },
    {
        question: 'can i cancle anytime?',
        answer: 'yes-you can cancel your subscription from dashboard.'
    },
    {
        question: 'what input format do you support?',
        answer: 'we support JPG, PNG, and WEBP formats.'
    }
];

export const footerLinks = [
    {
        title: "Quick links",
        links: [
            { name: "Home", url: "#" },
            { name: "Features", url: "#" },
            { name: "Pricing", url: "#" },
            { name: "FAQ", url: "#" }
        ]
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", url: "#" },
            { name: "Terms of Service", url: "#" }
        ]
    },
    {
        title: "Connect",
        links: [
            { name: "Twitter", url: "#" },
            { name: "LinkedIn", url: "#" },
            { name: "GitHub", url: "#" }
        ]
    }
];