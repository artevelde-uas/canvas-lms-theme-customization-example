import { run, addPlugin } from '@artevelde-uas/canvas-lms-app';

import allCoursesTermsTabsPlugin from '@artevelde-uas/canvas-lms-all-courses-terms-tabs-plugin';
import assignmentDefaultSettingsPlugin from '@artevelde-uas/canvas-lms-assignment-default-settings-plugin';
import assignmentsBulkAssignToPlugin from '@artevelde-uas/canvas-lms-assignments-bulk-assign-to-plugin';
import bbbCloseRecordingReminderPlugin from '@artevelde-uas/canvas-lms-bbb-close-recording-reminder-plugin';
import bbbDefaultSettingsPlugin from '@artevelde-uas/canvas-lms-bbb-default-settings-plugin';
import bbbRecordingPopupPlugin from '@artevelde-uas/canvas-lms-bbb-recording-popup-plugin';
import betterLeftMenuPlugin from '@artevelde-uas/canvas-lms-better-left-menu-plugin';
import clearAllSectionsDefaultPlugin from '@artevelde-uas/canvas-lms-clear-all-sections-default-plugin';
import enableCourseRecycleBinPlugin from '@artevelde-uas/canvas-lms-enable-course-recycle-bin-plugin';
import exportCourseGroupsPlugin from '@artevelde-uas/canvas-lms-export-course-groups-plugin';
import fileExplorerEnhancementsPlugin from '@artevelde-uas/canvas-lms-file-explorer-enhancements-plugin';
import fixFilesNavigationPlugin from '@artevelde-uas/canvas-lms-fix-files-navigation-plugin';
import gradebookDisclaimerPlugin from '@artevelde-uas/canvas-lms-gradebook-disclaimer-plugin';
import hidePointsFromLetterGradesPlugin from '@artevelde-uas/canvas-lms-hide-points-from-letter-grades-plugin';
import installedPluginsListPlugin from '@artevelde-uas/canvas-lms-installed-plugins-list-plugin';
import moduleNavigationPlugin from '@artevelde-uas/canvas-lms-module-navigation-plugin';
import msTeamsLinkPopupPlugin from '@artevelde-uas/canvas-lms-ms-teams-links-plugin';
import onlyShowSelectedModulePlugin from '@artevelde-uas/canvas-lms-only-show-selected-module-plugin';
import restrictSISCourseSettingsPlugin from '@artevelde-uas/canvas-lms-restrict-sis-course-settings-plugin';
import speedgraderLetterGradeDropdownPlugin from '@artevelde-uas/canvas-lms-speedgrader-letter-grade-dropdown-plugin';


addPlugin(allCoursesTermsTabsPlugin);
addPlugin(assignmentDefaultSettingsPlugin, {
    pointsPossible: 20,
    gradingType: 'points',
    submissionType: 'online',
    onlineEntryOptions: ['online_upload']
});
addPlugin(assignmentsBulkAssignToPlugin);
addPlugin(bbbCloseRecordingReminderPlugin);
addPlugin(bbbDefaultSettingsPlugin, {
    duration: 90,
    enableRecording: true,
    noTimeLimit: true
});
addPlugin(bbbRecordingPopupPlugin);
addPlugin(betterLeftMenuPlugin, {
    classicStyles: true,
    thinScrollbar: true,
    showScrollbar: 'hover',
    resetOnScroll: true
});
addPlugin(clearAllSectionsDefaultPlugin);
addPlugin(enableCourseRecycleBinPlugin);
addPlugin(exportCourseGroupsPlugin);
addPlugin(fileExplorerEnhancementsPlugin);
addPlugin(fixFilesNavigationPlugin);
addPlugin(gradebookDisclaimerPlugin);
addPlugin(hidePointsFromLetterGradesPlugin);
addPlugin(installedPluginsListPlugin);
addPlugin(msTeamsLinkPopupPlugin);
addPlugin(onlyShowSelectedModulePlugin);
addPlugin(moduleNavigationPlugin);
addPlugin(restrictSISCourseSettingsPlugin, {
    disable: {
        image: true,
        name: true,
        code: true,
        blueprint: true,
        template: true,
        timeZone: true,
        account: true,
        term: true,
        participation: true,
        language: true,
        storage: true,
        speedGraderFilter: true,
        gradingScheme: true,
        participation: true,
        license: true,
        copyright: true,
        visibility: true,
        format: true,
        offline: true,
        description: true,
        moreOptions: true
    }
});
addPlugin(speedgraderLetterGradeDropdownPlugin);

run();
