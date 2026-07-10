import { LightningElement } from 'lwc';
import {
    PageBreadcrumb, PageTitle, MetaAuthor, MetaDate,
    StatusInactive, StatusTraining, LabelGoal, LabelCapability, LabelStatus,
    GoalValue, CapabilityValue, EditButton,
    TabOverview, TabTrainingMetrics, TabIntegrations, TabVersions, TabSettings,
    VersionTitle, ActivateButton, EditAltText, CollapseAltText,
    LabelDescription, LabelLastModified, LabelLastModifiedBy, LabelCreatedOn, LabelCreatedBy,
    VersionDetailsTitle, LabelDataSpace, LabelDataModelObjects, LabelRecordsFields, LabelFiltering,
    DescriptionValue, DateValue, AuthorLink,
    DataSpaceValue, DataModelObjectsValue, RecordsFieldsValue, FilteringValue
} from 'data/labels/NbaModelDetail';
import { getCurrentRoute } from '../../../router';

export default class NbaModelDetail extends LightningElement {
    labels = {
        PageBreadcrumb, PageTitle, MetaAuthor, MetaDate,
        StatusInactive, StatusTraining, LabelGoal, LabelCapability, LabelStatus,
        GoalValue, CapabilityValue, EditButton,
        TabOverview, TabTrainingMetrics, TabIntegrations, TabVersions, TabSettings,
        VersionTitle, ActivateButton, EditAltText, CollapseAltText,
        LabelDescription, LabelLastModified, LabelLastModifiedBy, LabelCreatedOn, LabelCreatedBy,
        VersionDetailsTitle, LabelDataSpace, LabelDataModelObjects, LabelRecordsFields, LabelFiltering,
        DescriptionValue, DateValue, AuthorLink,
        DataSpaceValue, DataModelObjectsValue, RecordsFieldsValue, FilteringValue
    };

    // Static NBA card content — one canonical "Training in Progress" state
    nbaCurrentStage = 1;
    nbaStageCompletionDates = { training: '10 hours left' };
    nbaTitleText = 'Training in progress — no action needed right now.';
    nbaDescriptionText = "Once complete, you'll be guided to activate the model and set up inference. No action needed right now.";
    nbaCtaLabel = '';
    nbaRefreshedText = 'Refreshed 6 days ago';

    get activeTabValue() {
        return getCurrentRoute()?.defaultTab ?? 'overview';
    }
}
