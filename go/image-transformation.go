package voxgigimagetransformationsdk

import (
	"github.com/voxgig-sdk/image-transformation-sdk/core"
	"github.com/voxgig-sdk/image-transformation-sdk/entity"
	"github.com/voxgig-sdk/image-transformation-sdk/feature"
	_ "github.com/voxgig-sdk/image-transformation-sdk/utility"
)

// Type aliases preserve external API.
type ImageTransformationSDK = core.ImageTransformationSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type ImageTransformationEntity = core.ImageTransformationEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type ImageTransformationError = core.ImageTransformationError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewImageTransformationEntityFunc = func(client *core.ImageTransformationSDK, entopts map[string]any) core.ImageTransformationEntity {
		return entity.NewImageTransformationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewImageTransformationSDK = core.NewImageTransformationSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
