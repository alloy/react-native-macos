/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

import type {RNTesterExample} from '../types/RNTesterTypes';

const ComponentExamples: Array<RNTesterExample> = [
  {
    key: 'ActivityIndicatorExample',
    module: require('../examples/ActivityIndicator/ActivityIndicatorExample'),
    supportsTVOS: true,
  },
  {
    key: 'ButtonExample',
    module: require('../examples/Button/ButtonExample'),
    supportsTVOS: true,
  },
  // [TODO(OSS Candidate ISS#2710739)
  {
    key: 'DarkModeExample',
    module: require('../examples/DarkModeExample/DarkModeExample'),
    supportsTVOS: false,
  }, // ]TODO(OSS Candidate ISS#2710739)
  {
    key: 'DatePickerIOSExample',
    module: require('../examples/DatePicker/DatePickerIOSExample'),
    supportsTVOS: false,
  },
  // [TODO(macOS ISS#2323203)
  {
    key: 'DatePickerMacOSExample',
    module: require('../examples/DatePicker/DatePickerMacOSExample'),
    supportsTVOS: false,
  }, // ]TODO(macOS ISS#2323203)
  {
    key: 'FlatListExample',
    module: require('../examples/FlatList/FlatListExample'),
    supportsTVOS: true,
  },
  // [TODO(OSS Candidate ISS#2710739)
  {
    key: 'FocusEvents',
    module: require('../examples/FocusEventsExample/FocusEventsExample'),
    supportsTVOS: true,
  }, // ]TODO(OSS Candidate ISS#2710739)
  {
    key: 'ImageExample',
    module: require('../examples/Image/ImageExample'),
    supportsTVOS: true,
  },
  {
    key: 'JSResponderHandlerExample',
    module: require('../examples/JSResponderHandlerExample/JSResponderHandlerExample'),
  },
  {
    key: 'InputAccessoryViewExample',
    module: require('../examples/InputAccessoryView/InputAccessoryViewExample'),
    supportsTVOS: true,
  },
  {
    key: 'KeyboardAvoidingViewExample',
    module: require('../examples/KeyboardAvoidingView/KeyboardAvoidingViewExample'),
    supportsTVOS: false,
  },
  {
    key: 'LayoutEventsExample',
    module: require('../examples/Layout/LayoutEventsExample'),
    supportsTVOS: true,
  },
  {
    key: 'MaskedViewExample',
    module: require('../examples/MaskedView/MaskedViewExample'),
    supportsTVOS: true,
  },
  {
    key: 'ModalExample',
    module: require('../examples/Modal/ModalExample'),
    supportsTVOS: true,
  },
  {
    key: 'MultiColumnExample',
    module: require('../examples/MultiColumn/MultiColumnExample'),
    supportsTVOS: true,
  },
  {
    key: 'NewAppScreenExample',
    module: require('../examples/NewAppScreen/NewAppScreenExample'),
    supportsTVOS: false,
  },
  {
    key: 'PickerExample',
    module: require('../examples/Picker/PickerExample'),
    supportsTVOS: false,
  },
  {
    key: 'PickerIOSExample',
    module: require('../examples/Picker/PickerIOSExample'),
    supportsTVOS: false,
  },
  {
    key: 'ProgressViewIOSExample',
    module: require('../examples/ProgressViewIOS/ProgressViewIOSExample'),
    supportsTVOS: true,
  },
  {
    key: 'RefreshControlExample',
    module: require('../examples/RefreshControl/RefreshControlExample'),
    supportsTVOS: false,
  },
  {
    key: 'ScrollViewSimpleExample',
    module: require('../examples/ScrollView/ScrollViewSimpleExample'),
    supportsTVOS: true,
  },
  {
    key: 'SafeAreaViewExample',
    module: require('../examples/SafeAreaView/SafeAreaViewExample'),
    supportsTVOS: true,
  },
  {
    key: 'ScrollViewExample',
    module: require('../examples/ScrollView/ScrollViewExample'),
    supportsTVOS: true,
  },
  {
    key: 'ScrollViewAnimatedExample',
    module: require('../examples/ScrollView/ScrollViewAnimatedExample'),
    supportsTVOS: true,
  },
  {
    key: 'SectionListExample',
    module: require('../examples/SectionList/SectionListExample'),
    supportsTVOS: true,
  },
  {
    key: 'SegmentedControlIOSExample',
    module: require('../examples/SegmentedControlIOS/SegmentedControlIOSExample'),
    supportsTVOS: false,
  },
  {
    key: 'SliderExample',
    module: require('../examples/Slider/SliderExample'),
    supportsTVOS: false,
  },
  {
    key: 'StatusBarExample',
    module: require('../examples/StatusBar/StatusBarExample'),
    supportsTVOS: false,
  },
  {
    key: 'SwitchExample',
    module: require('../examples/Switch/SwitchExample'),
    supportsTVOS: false,
  },
  {
    key: 'TextExample',
    /* $FlowFixMe TODO(macOS ISS#2323203): allow macOS to share iOS test */
    module: require('../examples/Text/TextExample.ios'),
    supportsTVOS: true,
    // [TODO(macOS ISS#2323203)
    skipTest: {
      macos:
        'Reason: Intermittent failure: crash deallocating NSTextStorage of a TextView: tracked by https://github.com/microsoft/react-native-macos/issues/357',
    }, // ]TODO(macOS ISS#2323203)
  },
  {
    key: 'TextInputExample',
    /* $FlowFixMe TODO(macOS ISS#2323203): allow macOS to share iOS test */
    module: require('../examples/TextInput/TextInputExample.ios'),
    supportsTVOS: true,
  },
  {
    key: 'TouchableExample',
    module: require('../examples/Touchable/TouchableExample'),
    supportsTVOS: true,
  },
  {
    key: 'TransparentHitTestExample',
    module: require('../examples/TransparentHitTest/TransparentHitTestExample'),
    supportsTVOS: false,
  },
  {
    key: 'ViewExample',
    module: require('../examples/View/ViewExample'),
    supportsTVOS: true,
  },
];

const APIExamples: Array<RNTesterExample> = [
  {
    key: 'AccessibilityExample',
    module: require('../examples/Accessibility/AccessibilityExample'),
    supportsTVOS: false,
  },
  {
    key: 'AccessibilityIOSExample',
    module: require('../examples/Accessibility/AccessibilityIOSExample'),
    supportsTVOS: false,
  },
  {
    key: 'ActionSheetIOSExample',
    module: require('../examples/ActionSheetIOS/ActionSheetIOSExample'),
    supportsTVOS: true,
  },
  {
    key: 'AlertIOSExample',
    module: require('../examples/Alert/AlertIOSExample'),
    supportsTVOS: true,
  },
  // [TODO(macOS ISS#2323203)
  {
    key: 'AlertMacOSExample',
    module: require('../examples/Alert/AlertMacOSExample'),
    supportsTVOS: true,
  }, // ]TODO(macOS ISS#2323203)
  {
    key: 'AnimatedExample',
    module: require('../examples/Animated/AnimatedExample'),
    supportsTVOS: true,
  },
  {
    key: 'AnExApp',
    module: require('../examples/Animated/AnimatedGratuitousApp/AnExApp'),
    supportsTVOS: true,
  },
  {
    key: 'AppearanceExample',
    module: require('../examples/Appearance/AppearanceExample'),
    supportsTVOS: false,
  },
  {
    key: 'AppStateExample',
    module: require('../examples/AppState/AppStateExample'),
    supportsTVOS: true,
  },
  {
    key: 'AsyncStorageExample',
    module: require('../examples/AsyncStorage/AsyncStorageExample'),
    supportsTVOS: true,
  },
  {
    key: 'BorderExample',
    module: require('../examples/Border/BorderExample'),
    supportsTVOS: true,
  },
  {
    key: 'BoxShadowExample',
    module: require('../examples/BoxShadow/BoxShadowExample'),
    supportsTVOS: true,
  },
  {
    key: 'ClipboardExample',
    module: require('../examples/Clipboard/ClipboardExample'),
    supportsTVOS: false,
  },
  {
    key: 'CrashExample',
    module: require('../examples/Crash/CrashExample'),
    supportsTVOS: false,
  },
  {
    key: 'DevSettings',
    module: require('../examples/DevSettings/DevSettingsExample'),
  },
  {
    key: 'Dimensions',
    module: require('../examples/Dimensions/DimensionsExample'),
    supportsTVOS: true,
  },
  {
    key: 'LayoutAnimationExample',
    module: require('../examples/Layout/LayoutAnimationExample'),
    supportsTVOS: true,
  },
  {
    key: 'LayoutExample',
    module: require('../examples/Layout/LayoutExample'),
    supportsTVOS: true,
  },
  {
    key: 'LinkingExample',
    module: require('../examples/Linking/LinkingExample'),
    supportsTVOS: true,
  },
  {
    key: 'NativeAnimationsExample',
    module: require('../examples/NativeAnimation/NativeAnimationsExample'),
    supportsTVOS: true,
  },
  {
    key: 'OrientationChangeExample',
    module: require('../examples/OrientationChange/OrientationChangeExample'),
    supportsTVOS: false,
  },
  {
    key: 'PanResponderExample',
    module: require('../examples/PanResponder/PanResponderExample'),
    supportsTVOS: false,
  },
  {
    key: 'PointerEventsExample',
    module: require('../examples/PointerEvents/PointerEventsExample'),
    supportsTVOS: false,
  },
  {
    key: 'PushNotificationIOSExample',
    module: require('../examples/PushNotificationIOS/PushNotificationIOSExample'),
    supportsTVOS: false,
    // [TODO(OSS Candidate ISS#2710739)
    skipTest: {
      ios:
        'Reason: Requires remote notifications which are not supported in iOS Simulator.',
    }, // ]TODO(OSS Candidate ISS#2710739)
  },
  {
    key: 'RCTRootViewIOSExample',
    module: require('../examples/RCTRootView/RCTRootViewIOSExample'),
    supportsTVOS: true,
    // [TODO(OSS Candidate ISS#2710739)
    skipTest: {
      default:
        'Reason: requires native components and is convered by RCTRootViewIntegrationTests',
    }, // ]TODO(OSS Candidate ISS#2710739)
  },
  {
    key: 'RTLExample',
    module: require('../examples/RTL/RTLExample'),
    supportsTVOS: true,
    // [TODO(macOS ISS#2323203)
    skipTest: {
      macos:
        'Reason: Intermittent failure: crash deallocating NSTextStorage of a TextView: tracked by https://github.com/microsoft/react-native-macos/issues/357',
    }, // ]TODO(macOS ISS#2323203)
  },
  {
    key: 'ShareExample',
    module: require('../examples/Share/ShareExample'),
    supportsTVOS: true,
  },
  {
    key: 'SnapshotExample',
    module: require('../examples/Snapshot/SnapshotExample'),
    supportsTVOS: true,
  },
  {
    key: 'TimerExample',
    module: require('../examples/Timer/TimerExample'),
    supportsTVOS: true,
  },
  {
    key: 'TransformExample',
    module: require('../examples/Transform/TransformExample'),
    supportsTVOS: true,
    // [TODO(OSS Candidate ISS#2710739)
    skipTest: {
      default: 'Reason: Stack overflow in jsi, upstream issue.',
    }, // ]TODO(OSS Candidate ISS#2710739)
  },
  {
    key: 'TurboModuleExample',
    module: require('../examples/TurboModule/TurboModuleExample'),
    supportsTVOS: false,
    // [TODO(OSS Candidate ISS#2710739)
    skipTest: {
      default: 'Reason: requires TurboModule to be configured in host app.',
    }, // ]TODO(OSS Candidate ISS#2710739)
  },
  {
    key: 'TVEventHandlerExample',
    module: require('../examples/TVEventHandler/TVEventHandlerExample'),
    supportsTVOS: true,
  },
  {
    key: 'VibrationExample',
    module: require('../examples/Vibration/VibrationExample'),
    supportsTVOS: false,
  },
  {
    key: 'WebSocketExample',
    module: require('../examples/WebSocket/WebSocketExample'),
    supportsTVOS: true,
  },
  {
    key: 'XHRExample',
    module: require('../examples/XHR/XHRExample'),
    supportsTVOS: true,
  },
];

const Modules: {...} = {};

APIExamples.concat(ComponentExamples).forEach(Example => {
  Modules[Example.key] = Example.module;
});

const RNTesterList = {
  APIExamples,
  ComponentExamples,
  Modules,
};

module.exports = RNTesterList;
