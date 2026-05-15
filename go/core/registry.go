package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewImageTransformationEntityFunc func(client *ImageTransformationSDK, entopts map[string]any) ImageTransformationEntity

