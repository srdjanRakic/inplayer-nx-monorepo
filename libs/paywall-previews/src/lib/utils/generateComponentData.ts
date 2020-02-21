import previewTemplates from '../PreviewTemplates'

type PreviewTemplate = keyof typeof previewTemplates;

export const getPreviewTemplate = (preview: PreviewTemplate) => {
    return previewTemplates[preview] || {};
}