import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type AvatarKeySpecifier = ('default' | 'extraAttr' | 'forceDefault' | 'foundAvatar' | 'height' | 'isRestricted' | 'rating' | 'scheme' | 'size' | 'url' | 'width' | AvatarKeySpecifier)[];
export type AvatarFieldPolicy = {
	default?: FieldPolicy<any> | FieldReadFunction<any>,
	extraAttr?: FieldPolicy<any> | FieldReadFunction<any>,
	forceDefault?: FieldPolicy<any> | FieldReadFunction<any>,
	foundAvatar?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	rating?: FieldPolicy<any> | FieldReadFunction<any>,
	scheme?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryKeySpecifier = ('ancestors' | 'categoryId' | 'children' | 'contentNodes' | 'count' | 'databaseId' | 'description' | 'enqueuedScripts' | 'enqueuedStylesheets' | 'id' | 'isContentNode' | 'isRestricted' | 'isTermNode' | 'link' | 'name' | 'parent' | 'parentDatabaseId' | 'parentId' | 'posts' | 'seo' | 'slug' | 'taxonomy' | 'taxonomyName' | 'termGroupId' | 'termTaxonomyId' | 'uri' | CategoryKeySpecifier)[];
export type CategoryFieldPolicy = {
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>,
	categoryId?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	contentNodes?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomy?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomyName?: FieldPolicy<any> | FieldReadFunction<any>,
	termGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CategoryConnectionKeySpecifier)[];
export type CategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryConnectionEdgeKeySpecifier = ('cursor' | 'node' | CategoryConnectionEdgeKeySpecifier)[];
export type CategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | CategoryConnectionPageInfoKeySpecifier)[];
export type CategoryConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToAncestorsCategoryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CategoryToAncestorsCategoryConnectionKeySpecifier)[];
export type CategoryToAncestorsCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToAncestorsCategoryConnectionEdgeKeySpecifier = ('cursor' | 'node' | CategoryToAncestorsCategoryConnectionEdgeKeySpecifier)[];
export type CategoryToAncestorsCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToAncestorsCategoryConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | CategoryToAncestorsCategoryConnectionPageInfoKeySpecifier)[];
export type CategoryToAncestorsCategoryConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToCategoryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CategoryToCategoryConnectionKeySpecifier)[];
export type CategoryToCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToCategoryConnectionEdgeKeySpecifier = ('cursor' | 'node' | CategoryToCategoryConnectionEdgeKeySpecifier)[];
export type CategoryToCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToCategoryConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | CategoryToCategoryConnectionPageInfoKeySpecifier)[];
export type CategoryToCategoryConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToContentNodeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CategoryToContentNodeConnectionKeySpecifier)[];
export type CategoryToContentNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToContentNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | CategoryToContentNodeConnectionEdgeKeySpecifier)[];
export type CategoryToContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToContentNodeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | CategoryToContentNodeConnectionPageInfoKeySpecifier)[];
export type CategoryToContentNodeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToParentCategoryConnectionEdgeKeySpecifier = ('cursor' | 'node' | CategoryToParentCategoryConnectionEdgeKeySpecifier)[];
export type CategoryToParentCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToPostConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CategoryToPostConnectionKeySpecifier)[];
export type CategoryToPostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToPostConnectionEdgeKeySpecifier = ('cursor' | 'node' | CategoryToPostConnectionEdgeKeySpecifier)[];
export type CategoryToPostConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToPostConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | CategoryToPostConnectionPageInfoKeySpecifier)[];
export type CategoryToPostConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CategoryToTaxonomyConnectionEdgeKeySpecifier = ('cursor' | 'node' | CategoryToTaxonomyConnectionEdgeKeySpecifier)[];
export type CategoryToTaxonomyConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentKeySpecifier = ('agent' | 'approved' | 'author' | 'authorIp' | 'commentId' | 'commentedOn' | 'content' | 'databaseId' | 'date' | 'dateGmt' | 'id' | 'isRestricted' | 'karma' | 'parent' | 'parentDatabaseId' | 'parentId' | 'replies' | 'status' | 'type' | CommentKeySpecifier)[];
export type CommentFieldPolicy = {
	agent?: FieldPolicy<any> | FieldReadFunction<any>,
	approved?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorIp?: FieldPolicy<any> | FieldReadFunction<any>,
	commentId?: FieldPolicy<any> | FieldReadFunction<any>,
	commentedOn?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	karma?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	replies?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentAuthorKeySpecifier = ('avatar' | 'databaseId' | 'email' | 'id' | 'isRestricted' | 'name' | 'url' | CommentAuthorKeySpecifier)[];
export type CommentAuthorFieldPolicy = {
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CommentConnectionKeySpecifier)[];
export type CommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentConnectionEdgeKeySpecifier = ('cursor' | 'node' | CommentConnectionEdgeKeySpecifier)[];
export type CommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | CommentConnectionPageInfoKeySpecifier)[];
export type CommentConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentToCommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | CommentToCommentConnectionKeySpecifier)[];
export type CommentToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentToCommentConnectionEdgeKeySpecifier = ('cursor' | 'node' | CommentToCommentConnectionEdgeKeySpecifier)[];
export type CommentToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentToCommentConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | CommentToCommentConnectionPageInfoKeySpecifier)[];
export type CommentToCommentConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentToCommenterConnectionEdgeKeySpecifier = ('cursor' | 'node' | CommentToCommenterConnectionEdgeKeySpecifier)[];
export type CommentToCommenterConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentToContentNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | CommentToContentNodeConnectionEdgeKeySpecifier)[];
export type CommentToContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommentToParentCommentConnectionEdgeKeySpecifier = ('cursor' | 'node' | CommentToParentCommentConnectionEdgeKeySpecifier)[];
export type CommentToParentCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommenterKeySpecifier = ('avatar' | 'databaseId' | 'email' | 'id' | 'isRestricted' | 'name' | 'url' | CommenterKeySpecifier)[];
export type CommenterFieldPolicy = {
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommenterConnectionEdgeKeySpecifier = ('cursor' | 'node' | CommenterConnectionEdgeKeySpecifier)[];
export type CommenterConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ConnectionKeySpecifier)[];
export type ConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeKeySpecifier = ('attachedMedia' | 'contentType' | 'contentTypeName' | 'databaseId' | 'date' | 'dateGmt' | 'desiredSlug' | 'editingLockedBy' | 'enclosure' | 'enqueuedScripts' | 'enqueuedStylesheets' | 'guid' | 'id' | 'isContentNode' | 'isPreview' | 'isRestricted' | 'isTermNode' | 'lastEditedBy' | 'link' | 'modified' | 'modifiedGmt' | 'previewRevisionDatabaseId' | 'previewRevisionId' | 'seo' | 'slug' | 'status' | 'template' | 'uri' | ContentNodeKeySpecifier)[];
export type ContentNodeFieldPolicy = {
	attachedMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	contentTypeName?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>,
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>,
	guid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ContentNodeConnectionKeySpecifier)[];
export type ContentNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | ContentNodeConnectionEdgeKeySpecifier)[];
export type ContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | ContentNodeConnectionPageInfoKeySpecifier)[];
export type ContentNodeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeToContentTypeConnectionEdgeKeySpecifier = ('cursor' | 'node' | ContentNodeToContentTypeConnectionEdgeKeySpecifier)[];
export type ContentNodeToContentTypeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeToEditLastConnectionEdgeKeySpecifier = ('cursor' | 'node' | ContentNodeToEditLastConnectionEdgeKeySpecifier)[];
export type ContentNodeToEditLastConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeToEditLockConnectionEdgeKeySpecifier = ('cursor' | 'lockTimestamp' | 'node' | ContentNodeToEditLockConnectionEdgeKeySpecifier)[];
export type ContentNodeToEditLockConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	lockTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeToEnqueuedScriptConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ContentNodeToEnqueuedScriptConnectionKeySpecifier)[];
export type ContentNodeToEnqueuedScriptConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeToEnqueuedScriptConnectionEdgeKeySpecifier = ('cursor' | 'node' | ContentNodeToEnqueuedScriptConnectionEdgeKeySpecifier)[];
export type ContentNodeToEnqueuedScriptConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeToEnqueuedScriptConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | ContentNodeToEnqueuedScriptConnectionPageInfoKeySpecifier)[];
export type ContentNodeToEnqueuedScriptConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeToEnqueuedStylesheetConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ContentNodeToEnqueuedStylesheetConnectionKeySpecifier)[];
export type ContentNodeToEnqueuedStylesheetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier = ('cursor' | 'node' | ContentNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier)[];
export type ContentNodeToEnqueuedStylesheetConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeToEnqueuedStylesheetConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | ContentNodeToEnqueuedStylesheetConnectionPageInfoKeySpecifier)[];
export type ContentNodeToEnqueuedStylesheetConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeToMediaItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ContentNodeToMediaItemConnectionKeySpecifier)[];
export type ContentNodeToMediaItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeToMediaItemConnectionEdgeKeySpecifier = ('cursor' | 'node' | ContentNodeToMediaItemConnectionEdgeKeySpecifier)[];
export type ContentNodeToMediaItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentNodeToMediaItemConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | ContentNodeToMediaItemConnectionPageInfoKeySpecifier)[];
export type ContentNodeToMediaItemConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentTemplateKeySpecifier = ('templateName' | ContentTemplateKeySpecifier)[];
export type ContentTemplateFieldPolicy = {
	templateName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentTypeKeySpecifier = ('canExport' | 'connectedTaxonomies' | 'contentNodes' | 'deleteWithUser' | 'description' | 'excludeFromSearch' | 'graphqlPluralName' | 'graphqlSingleName' | 'hasArchive' | 'hierarchical' | 'id' | 'isContentNode' | 'isFrontPage' | 'isPostsPage' | 'isRestricted' | 'isTermNode' | 'label' | 'labels' | 'menuIcon' | 'menuPosition' | 'name' | 'public' | 'publiclyQueryable' | 'restBase' | 'restControllerClass' | 'showInAdminBar' | 'showInGraphql' | 'showInMenu' | 'showInNavMenus' | 'showInRest' | 'showUi' | 'uri' | ContentTypeKeySpecifier)[];
export type ContentTypeFieldPolicy = {
	canExport?: FieldPolicy<any> | FieldReadFunction<any>,
	connectedTaxonomies?: FieldPolicy<any> | FieldReadFunction<any>,
	contentNodes?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteWithUser?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	excludeFromSearch?: FieldPolicy<any> | FieldReadFunction<any>,
	graphqlPluralName?: FieldPolicy<any> | FieldReadFunction<any>,
	graphqlSingleName?: FieldPolicy<any> | FieldReadFunction<any>,
	hasArchive?: FieldPolicy<any> | FieldReadFunction<any>,
	hierarchical?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isFrontPage?: FieldPolicy<any> | FieldReadFunction<any>,
	isPostsPage?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	menuIcon?: FieldPolicy<any> | FieldReadFunction<any>,
	menuPosition?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	public?: FieldPolicy<any> | FieldReadFunction<any>,
	publiclyQueryable?: FieldPolicy<any> | FieldReadFunction<any>,
	restBase?: FieldPolicy<any> | FieldReadFunction<any>,
	restControllerClass?: FieldPolicy<any> | FieldReadFunction<any>,
	showInAdminBar?: FieldPolicy<any> | FieldReadFunction<any>,
	showInGraphql?: FieldPolicy<any> | FieldReadFunction<any>,
	showInMenu?: FieldPolicy<any> | FieldReadFunction<any>,
	showInNavMenus?: FieldPolicy<any> | FieldReadFunction<any>,
	showInRest?: FieldPolicy<any> | FieldReadFunction<any>,
	showUi?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentTypeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ContentTypeConnectionKeySpecifier)[];
export type ContentTypeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentTypeConnectionEdgeKeySpecifier = ('cursor' | 'node' | ContentTypeConnectionEdgeKeySpecifier)[];
export type ContentTypeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentTypeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | ContentTypeConnectionPageInfoKeySpecifier)[];
export type ContentTypeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentTypeToContentNodeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ContentTypeToContentNodeConnectionKeySpecifier)[];
export type ContentTypeToContentNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentTypeToContentNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | ContentTypeToContentNodeConnectionEdgeKeySpecifier)[];
export type ContentTypeToContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentTypeToContentNodeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | ContentTypeToContentNodeConnectionPageInfoKeySpecifier)[];
export type ContentTypeToContentNodeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentTypeToTaxonomyConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ContentTypeToTaxonomyConnectionKeySpecifier)[];
export type ContentTypeToTaxonomyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentTypeToTaxonomyConnectionEdgeKeySpecifier = ('cursor' | 'node' | ContentTypeToTaxonomyConnectionEdgeKeySpecifier)[];
export type ContentTypeToTaxonomyConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ContentTypeToTaxonomyConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | ContentTypeToTaxonomyConnectionPageInfoKeySpecifier)[];
export type ContentTypeToTaxonomyConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCategoryPayloadKeySpecifier = ('category' | 'clientMutationId' | CreateCategoryPayloadKeySpecifier)[];
export type CreateCategoryPayloadFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateCommentPayloadKeySpecifier = ('clientMutationId' | 'comment' | 'success' | CreateCommentPayloadKeySpecifier)[];
export type CreateCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateMediaItemPayloadKeySpecifier = ('clientMutationId' | 'mediaItem' | CreateMediaItemPayloadKeySpecifier)[];
export type CreateMediaItemPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePagePayloadKeySpecifier = ('clientMutationId' | 'page' | CreatePagePayloadKeySpecifier)[];
export type CreatePagePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePostFormatPayloadKeySpecifier = ('clientMutationId' | 'postFormat' | CreatePostFormatPayloadKeySpecifier)[];
export type CreatePostFormatPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	postFormat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreatePostPayloadKeySpecifier = ('clientMutationId' | 'post' | CreatePostPayloadKeySpecifier)[];
export type CreatePostPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateTagPayloadKeySpecifier = ('clientMutationId' | 'tag' | CreateTagPayloadKeySpecifier)[];
export type CreateTagPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CreateUserPayloadKeySpecifier = ('clientMutationId' | 'user' | CreateUserPayloadKeySpecifier)[];
export type CreateUserPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CustomTemplateKeySpecifier = ('templateName' | CustomTemplateKeySpecifier)[];
export type CustomTemplateFieldPolicy = {
	templateName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DatabaseIdentifierKeySpecifier = ('databaseId' | DatabaseIdentifierKeySpecifier)[];
export type DatabaseIdentifierFieldPolicy = {
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DefaultTemplateKeySpecifier = ('templateName' | DefaultTemplateKeySpecifier)[];
export type DefaultTemplateFieldPolicy = {
	templateName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteCategoryPayloadKeySpecifier = ('category' | 'clientMutationId' | 'deletedId' | DeleteCategoryPayloadKeySpecifier)[];
export type DeleteCategoryPayloadFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteCommentPayloadKeySpecifier = ('clientMutationId' | 'comment' | 'deletedId' | DeleteCommentPayloadKeySpecifier)[];
export type DeleteCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteMediaItemPayloadKeySpecifier = ('clientMutationId' | 'deletedId' | 'mediaItem' | DeleteMediaItemPayloadKeySpecifier)[];
export type DeleteMediaItemPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePagePayloadKeySpecifier = ('clientMutationId' | 'deletedId' | 'page' | DeletePagePayloadKeySpecifier)[];
export type DeletePagePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePostFormatPayloadKeySpecifier = ('clientMutationId' | 'deletedId' | 'postFormat' | DeletePostFormatPayloadKeySpecifier)[];
export type DeletePostFormatPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>,
	postFormat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeletePostPayloadKeySpecifier = ('clientMutationId' | 'deletedId' | 'post' | DeletePostPayloadKeySpecifier)[];
export type DeletePostPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteTagPayloadKeySpecifier = ('clientMutationId' | 'deletedId' | 'tag' | DeleteTagPayloadKeySpecifier)[];
export type DeleteTagPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DeleteUserPayloadKeySpecifier = ('clientMutationId' | 'deletedId' | 'user' | DeleteUserPayloadKeySpecifier)[];
export type DeleteUserPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	deletedId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DiscussionSettingsKeySpecifier = ('defaultCommentStatus' | 'defaultPingStatus' | DiscussionSettingsKeySpecifier)[];
export type DiscussionSettingsFieldPolicy = {
	defaultCommentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultPingStatus?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EdgeKeySpecifier = ('cursor' | 'node' | EdgeKeySpecifier)[];
export type EdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnqueuedAssetKeySpecifier = ('after' | 'args' | 'before' | 'conditional' | 'dependencies' | 'extra' | 'handle' | 'id' | 'src' | 'version' | EnqueuedAssetKeySpecifier)[];
export type EnqueuedAssetFieldPolicy = {
	after?: FieldPolicy<any> | FieldReadFunction<any>,
	args?: FieldPolicy<any> | FieldReadFunction<any>,
	before?: FieldPolicy<any> | FieldReadFunction<any>,
	conditional?: FieldPolicy<any> | FieldReadFunction<any>,
	dependencies?: FieldPolicy<any> | FieldReadFunction<any>,
	extra?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnqueuedScriptKeySpecifier = ('after' | 'args' | 'before' | 'conditional' | 'dependencies' | 'extra' | 'extraData' | 'handle' | 'id' | 'src' | 'strategy' | 'version' | EnqueuedScriptKeySpecifier)[];
export type EnqueuedScriptFieldPolicy = {
	after?: FieldPolicy<any> | FieldReadFunction<any>,
	args?: FieldPolicy<any> | FieldReadFunction<any>,
	before?: FieldPolicy<any> | FieldReadFunction<any>,
	conditional?: FieldPolicy<any> | FieldReadFunction<any>,
	dependencies?: FieldPolicy<any> | FieldReadFunction<any>,
	extra?: FieldPolicy<any> | FieldReadFunction<any>,
	extraData?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	strategy?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnqueuedScriptConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | EnqueuedScriptConnectionKeySpecifier)[];
export type EnqueuedScriptConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnqueuedScriptConnectionEdgeKeySpecifier = ('cursor' | 'node' | EnqueuedScriptConnectionEdgeKeySpecifier)[];
export type EnqueuedScriptConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnqueuedScriptConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | EnqueuedScriptConnectionPageInfoKeySpecifier)[];
export type EnqueuedScriptConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnqueuedStylesheetKeySpecifier = ('after' | 'args' | 'before' | 'conditional' | 'dependencies' | 'extra' | 'handle' | 'id' | 'isRtl' | 'media' | 'path' | 'rel' | 'src' | 'suffix' | 'title' | 'version' | EnqueuedStylesheetKeySpecifier)[];
export type EnqueuedStylesheetFieldPolicy = {
	after?: FieldPolicy<any> | FieldReadFunction<any>,
	args?: FieldPolicy<any> | FieldReadFunction<any>,
	before?: FieldPolicy<any> | FieldReadFunction<any>,
	conditional?: FieldPolicy<any> | FieldReadFunction<any>,
	dependencies?: FieldPolicy<any> | FieldReadFunction<any>,
	extra?: FieldPolicy<any> | FieldReadFunction<any>,
	handle?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRtl?: FieldPolicy<any> | FieldReadFunction<any>,
	media?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	rel?: FieldPolicy<any> | FieldReadFunction<any>,
	src?: FieldPolicy<any> | FieldReadFunction<any>,
	suffix?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnqueuedStylesheetConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | EnqueuedStylesheetConnectionKeySpecifier)[];
export type EnqueuedStylesheetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnqueuedStylesheetConnectionEdgeKeySpecifier = ('cursor' | 'node' | EnqueuedStylesheetConnectionEdgeKeySpecifier)[];
export type EnqueuedStylesheetConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EnqueuedStylesheetConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | EnqueuedStylesheetConnectionPageInfoKeySpecifier)[];
export type EnqueuedStylesheetConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FullwidthTemplateKeySpecifier = ('templateName' | FullwidthTemplateKeySpecifier)[];
export type FullwidthTemplateFieldPolicy = {
	templateName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GeneralSettingsKeySpecifier = ('dateFormat' | 'description' | 'email' | 'language' | 'startOfWeek' | 'timeFormat' | 'timezone' | 'title' | 'url' | GeneralSettingsKeySpecifier)[];
export type GeneralSettingsFieldPolicy = {
	dateFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	startOfWeek?: FieldPolicy<any> | FieldReadFunction<any>,
	timeFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	timezone?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HierarchicalContentNodeKeySpecifier = ('ancestors' | 'attachedMedia' | 'children' | 'contentType' | 'contentTypeName' | 'databaseId' | 'date' | 'dateGmt' | 'desiredSlug' | 'editingLockedBy' | 'enclosure' | 'enqueuedScripts' | 'enqueuedStylesheets' | 'guid' | 'id' | 'isContentNode' | 'isPreview' | 'isRestricted' | 'isTermNode' | 'lastEditedBy' | 'link' | 'modified' | 'modifiedGmt' | 'parent' | 'parentDatabaseId' | 'parentId' | 'previewRevisionDatabaseId' | 'previewRevisionId' | 'seo' | 'slug' | 'status' | 'template' | 'uri' | HierarchicalContentNodeKeySpecifier)[];
export type HierarchicalContentNodeFieldPolicy = {
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>,
	attachedMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	contentTypeName?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>,
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>,
	guid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HierarchicalContentNodeToContentNodeAncestorsConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | HierarchicalContentNodeToContentNodeAncestorsConnectionKeySpecifier)[];
export type HierarchicalContentNodeToContentNodeAncestorsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeKeySpecifier = ('cursor' | 'node' | HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeKeySpecifier)[];
export type HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoKeySpecifier)[];
export type HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HierarchicalContentNodeToContentNodeChildrenConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | HierarchicalContentNodeToContentNodeChildrenConnectionKeySpecifier)[];
export type HierarchicalContentNodeToContentNodeChildrenConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdgeKeySpecifier = ('cursor' | 'node' | HierarchicalContentNodeToContentNodeChildrenConnectionEdgeKeySpecifier)[];
export type HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoKeySpecifier)[];
export type HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HierarchicalContentNodeToParentContentNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | HierarchicalContentNodeToParentContentNodeConnectionEdgeKeySpecifier)[];
export type HierarchicalContentNodeToParentContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HierarchicalNodeKeySpecifier = ('databaseId' | 'id' | 'parentDatabaseId' | 'parentId' | HierarchicalNodeKeySpecifier)[];
export type HierarchicalNodeFieldPolicy = {
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type HierarchicalTermNodeKeySpecifier = ('count' | 'databaseId' | 'description' | 'enqueuedScripts' | 'enqueuedStylesheets' | 'id' | 'isContentNode' | 'isRestricted' | 'isTermNode' | 'link' | 'name' | 'parentDatabaseId' | 'parentId' | 'slug' | 'taxonomyName' | 'termGroupId' | 'termTaxonomyId' | 'uri' | HierarchicalTermNodeKeySpecifier)[];
export type HierarchicalTermNodeFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomyName?: FieldPolicy<any> | FieldReadFunction<any>,
	termGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LoginPayloadKeySpecifier = ('authToken' | 'clientMutationId' | 'refreshToken' | 'user' | LoginPayloadKeySpecifier)[];
export type LoginPayloadFieldPolicy = {
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaDetailsKeySpecifier = ('file' | 'height' | 'meta' | 'sizes' | 'width' | MediaDetailsKeySpecifier)[];
export type MediaDetailsFieldPolicy = {
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	sizes?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaItemKeySpecifier = ('altText' | 'ancestors' | 'attachedMedia' | 'author' | 'authorDatabaseId' | 'authorId' | 'caption' | 'children' | 'commentCount' | 'commentStatus' | 'comments' | 'contentType' | 'contentTypeName' | 'databaseId' | 'date' | 'dateGmt' | 'description' | 'desiredSlug' | 'editingLockedBy' | 'enclosure' | 'enqueuedScripts' | 'enqueuedStylesheets' | 'fileSize' | 'guid' | 'id' | 'isContentNode' | 'isPreview' | 'isRestricted' | 'isTermNode' | 'lastEditedBy' | 'link' | 'mediaDetails' | 'mediaItemId' | 'mediaItemUrl' | 'mediaType' | 'mimeType' | 'modified' | 'modifiedGmt' | 'parent' | 'parentDatabaseId' | 'parentId' | 'previewRevisionDatabaseId' | 'previewRevisionId' | 'seo' | 'sizes' | 'slug' | 'sourceUrl' | 'srcSet' | 'status' | 'template' | 'title' | 'uri' | MediaItemKeySpecifier)[];
export type MediaItemFieldPolicy = {
	altText?: FieldPolicy<any> | FieldReadFunction<any>,
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>,
	attachedMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	caption?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>,
	commentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	contentTypeName?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>,
	fileSize?: FieldPolicy<any> | FieldReadFunction<any>,
	guid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaItemId?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaItemUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaType?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	sizes?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	srcSet?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | MediaItemConnectionKeySpecifier)[];
export type MediaItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaItemConnectionEdgeKeySpecifier = ('cursor' | 'node' | MediaItemConnectionEdgeKeySpecifier)[];
export type MediaItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaItemConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | MediaItemConnectionPageInfoKeySpecifier)[];
export type MediaItemConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaItemMetaKeySpecifier = ('aperture' | 'camera' | 'caption' | 'copyright' | 'createdTimestamp' | 'credit' | 'focalLength' | 'iso' | 'keywords' | 'orientation' | 'shutterSpeed' | 'title' | MediaItemMetaKeySpecifier)[];
export type MediaItemMetaFieldPolicy = {
	aperture?: FieldPolicy<any> | FieldReadFunction<any>,
	camera?: FieldPolicy<any> | FieldReadFunction<any>,
	caption?: FieldPolicy<any> | FieldReadFunction<any>,
	copyright?: FieldPolicy<any> | FieldReadFunction<any>,
	createdTimestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	credit?: FieldPolicy<any> | FieldReadFunction<any>,
	focalLength?: FieldPolicy<any> | FieldReadFunction<any>,
	iso?: FieldPolicy<any> | FieldReadFunction<any>,
	keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	orientation?: FieldPolicy<any> | FieldReadFunction<any>,
	shutterSpeed?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaItemToCommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | MediaItemToCommentConnectionKeySpecifier)[];
export type MediaItemToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaItemToCommentConnectionEdgeKeySpecifier = ('cursor' | 'node' | MediaItemToCommentConnectionEdgeKeySpecifier)[];
export type MediaItemToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaItemToCommentConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | MediaItemToCommentConnectionPageInfoKeySpecifier)[];
export type MediaItemToCommentConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MediaSizeKeySpecifier = ('file' | 'fileSize' | 'height' | 'mimeType' | 'name' | 'sourceUrl' | 'width' | MediaSizeKeySpecifier)[];
export type MediaSizeFieldPolicy = {
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	fileSize?: FieldPolicy<any> | FieldReadFunction<any>,
	height?: FieldPolicy<any> | FieldReadFunction<any>,
	mimeType?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	sourceUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	width?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuKeySpecifier = ('count' | 'databaseId' | 'id' | 'isRestricted' | 'locations' | 'menuId' | 'menuItems' | 'name' | 'slug' | MenuKeySpecifier)[];
export type MenuFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>,
	menuId?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItems?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | MenuConnectionKeySpecifier)[];
export type MenuConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuConnectionEdgeKeySpecifier = ('cursor' | 'node' | MenuConnectionEdgeKeySpecifier)[];
export type MenuConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | MenuConnectionPageInfoKeySpecifier)[];
export type MenuConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemKeySpecifier = ('childItems' | 'connectedNode' | 'connectedObject' | 'cssClasses' | 'databaseId' | 'description' | 'id' | 'isRestricted' | 'label' | 'linkRelationship' | 'locations' | 'menu' | 'menuItemId' | 'order' | 'parentDatabaseId' | 'parentId' | 'path' | 'target' | 'title' | 'uri' | 'url' | MenuItemKeySpecifier)[];
export type MenuItemFieldPolicy = {
	childItems?: FieldPolicy<any> | FieldReadFunction<any>,
	connectedNode?: FieldPolicy<any> | FieldReadFunction<any>,
	connectedObject?: FieldPolicy<any> | FieldReadFunction<any>,
	cssClasses?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	linkRelationship?: FieldPolicy<any> | FieldReadFunction<any>,
	locations?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItemId?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | MenuItemConnectionKeySpecifier)[];
export type MenuItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemConnectionEdgeKeySpecifier = ('cursor' | 'node' | MenuItemConnectionEdgeKeySpecifier)[];
export type MenuItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | MenuItemConnectionPageInfoKeySpecifier)[];
export type MenuItemConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemLinkableKeySpecifier = ('databaseId' | 'id' | 'isContentNode' | 'isTermNode' | 'uri' | MenuItemLinkableKeySpecifier)[];
export type MenuItemLinkableFieldPolicy = {
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemLinkableConnectionEdgeKeySpecifier = ('cursor' | 'node' | MenuItemLinkableConnectionEdgeKeySpecifier)[];
export type MenuItemLinkableConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemToMenuConnectionEdgeKeySpecifier = ('cursor' | 'node' | MenuItemToMenuConnectionEdgeKeySpecifier)[];
export type MenuItemToMenuConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemToMenuItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | MenuItemToMenuItemConnectionKeySpecifier)[];
export type MenuItemToMenuItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemToMenuItemConnectionEdgeKeySpecifier = ('cursor' | 'node' | MenuItemToMenuItemConnectionEdgeKeySpecifier)[];
export type MenuItemToMenuItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemToMenuItemConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | MenuItemToMenuItemConnectionPageInfoKeySpecifier)[];
export type MenuItemToMenuItemConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuItemToMenuItemLinkableConnectionEdgeKeySpecifier = ('cursor' | 'node' | MenuItemToMenuItemLinkableConnectionEdgeKeySpecifier)[];
export type MenuItemToMenuItemLinkableConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuToMenuItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | MenuToMenuItemConnectionKeySpecifier)[];
export type MenuToMenuItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuToMenuItemConnectionEdgeKeySpecifier = ('cursor' | 'node' | MenuToMenuItemConnectionEdgeKeySpecifier)[];
export type MenuToMenuItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MenuToMenuItemConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | MenuToMenuItemConnectionPageInfoKeySpecifier)[];
export type MenuToMenuItemConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MolonguiAuthorKeySpecifier = ('avatar' | 'bio' | 'displayName' | 'id' | 'posts' | 'slug' | 'type' | MolonguiAuthorKeySpecifier)[];
export type MolonguiAuthorFieldPolicy = {
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	bio?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeKeySpecifier = ('id' | NodeKeySpecifier)[];
export type NodeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithAuthorKeySpecifier = ('author' | 'authorDatabaseId' | 'authorId' | 'id' | NodeWithAuthorKeySpecifier)[];
export type NodeWithAuthorFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithAuthorToUserConnectionEdgeKeySpecifier = ('cursor' | 'node' | NodeWithAuthorToUserConnectionEdgeKeySpecifier)[];
export type NodeWithAuthorToUserConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithCommentsKeySpecifier = ('commentCount' | 'commentStatus' | 'id' | NodeWithCommentsKeySpecifier)[];
export type NodeWithCommentsFieldPolicy = {
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>,
	commentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithContentEditorKeySpecifier = ('content' | 'id' | NodeWithContentEditorKeySpecifier)[];
export type NodeWithContentEditorFieldPolicy = {
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithExcerptKeySpecifier = ('excerpt' | 'id' | NodeWithExcerptKeySpecifier)[];
export type NodeWithExcerptFieldPolicy = {
	excerpt?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithFeaturedImageKeySpecifier = ('featuredImage' | 'featuredImageDatabaseId' | 'featuredImageId' | 'id' | NodeWithFeaturedImageKeySpecifier)[];
export type NodeWithFeaturedImageFieldPolicy = {
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>,
	featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithFeaturedImageToMediaItemConnectionEdgeKeySpecifier = ('cursor' | 'node' | NodeWithFeaturedImageToMediaItemConnectionEdgeKeySpecifier)[];
export type NodeWithFeaturedImageToMediaItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithPageAttributesKeySpecifier = ('id' | 'menuOrder' | NodeWithPageAttributesKeySpecifier)[];
export type NodeWithPageAttributesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	menuOrder?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithRevisionsKeySpecifier = ('id' | 'isRevision' | 'revisionOf' | NodeWithRevisionsKeySpecifier)[];
export type NodeWithRevisionsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionOf?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithRevisionsToContentNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | NodeWithRevisionsToContentNodeConnectionEdgeKeySpecifier)[];
export type NodeWithRevisionsToContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithTemplateKeySpecifier = ('id' | 'template' | NodeWithTemplateKeySpecifier)[];
export type NodeWithTemplateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithTitleKeySpecifier = ('id' | 'seo' | 'title' | NodeWithTitleKeySpecifier)[];
export type NodeWithTitleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type NodeWithTrackbacksKeySpecifier = ('id' | 'pingStatus' | 'pinged' | 'toPing' | NodeWithTrackbacksKeySpecifier)[];
export type NodeWithTrackbacksFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	pingStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	pinged?: FieldPolicy<any> | FieldReadFunction<any>,
	toPing?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OneToOneConnectionKeySpecifier = ('cursor' | 'node' | OneToOneConnectionKeySpecifier)[];
export type OneToOneConnectionFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageKeySpecifier = ('ancestors' | 'attachedMedia' | 'author' | 'authorDatabaseId' | 'authorId' | 'children' | 'commentCount' | 'commentStatus' | 'comments' | 'content' | 'contentType' | 'contentTypeName' | 'databaseId' | 'date' | 'dateGmt' | 'desiredSlug' | 'editingLockedBy' | 'enclosure' | 'enqueuedScripts' | 'enqueuedStylesheets' | 'featuredImage' | 'featuredImageDatabaseId' | 'featuredImageId' | 'guid' | 'id' | 'isContentNode' | 'isFrontPage' | 'isPostsPage' | 'isPreview' | 'isPrivacyPage' | 'isRestricted' | 'isRevision' | 'isTermNode' | 'lastEditedBy' | 'link' | 'menuOrder' | 'modified' | 'modifiedGmt' | 'pageId' | 'parent' | 'parentDatabaseId' | 'parentId' | 'preview' | 'previewRevisionDatabaseId' | 'previewRevisionId' | 'revisionOf' | 'revisions' | 'seo' | 'slug' | 'status' | 'template' | 'title' | 'uri' | PageKeySpecifier)[];
export type PageFieldPolicy = {
	ancestors?: FieldPolicy<any> | FieldReadFunction<any>,
	attachedMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>,
	commentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	contentTypeName?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>,
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>,
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>,
	featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>,
	guid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isFrontPage?: FieldPolicy<any> | FieldReadFunction<any>,
	isPostsPage?: FieldPolicy<any> | FieldReadFunction<any>,
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrivacyPage?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	isRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	menuOrder?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>,
	pageId?: FieldPolicy<any> | FieldReadFunction<any>,
	parent?: FieldPolicy<any> | FieldReadFunction<any>,
	parentDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	preview?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionOf?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PageConnectionKeySpecifier)[];
export type PageConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageConnectionEdgeKeySpecifier = ('cursor' | 'node' | PageConnectionEdgeKeySpecifier)[];
export type PageConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PageConnectionPageInfoKeySpecifier)[];
export type PageConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'startCursor' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageToCommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PageToCommentConnectionKeySpecifier)[];
export type PageToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageToCommentConnectionEdgeKeySpecifier = ('cursor' | 'node' | PageToCommentConnectionEdgeKeySpecifier)[];
export type PageToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageToCommentConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PageToCommentConnectionPageInfoKeySpecifier)[];
export type PageToCommentConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageToPreviewConnectionEdgeKeySpecifier = ('cursor' | 'node' | PageToPreviewConnectionEdgeKeySpecifier)[];
export type PageToPreviewConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageToRevisionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PageToRevisionConnectionKeySpecifier)[];
export type PageToRevisionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageToRevisionConnectionEdgeKeySpecifier = ('cursor' | 'node' | PageToRevisionConnectionEdgeKeySpecifier)[];
export type PageToRevisionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageToRevisionConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PageToRevisionConnectionPageInfoKeySpecifier)[];
export type PageToRevisionConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginKeySpecifier = ('author' | 'authorUri' | 'description' | 'id' | 'isRestricted' | 'name' | 'path' | 'pluginUri' | 'version' | PluginKeySpecifier)[];
export type PluginFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorUri?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	path?: FieldPolicy<any> | FieldReadFunction<any>,
	pluginUri?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PluginConnectionKeySpecifier)[];
export type PluginConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginConnectionEdgeKeySpecifier = ('cursor' | 'node' | PluginConnectionEdgeKeySpecifier)[];
export type PluginConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PluginConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PluginConnectionPageInfoKeySpecifier)[];
export type PluginConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('attachedMedia' | 'author' | 'authorDatabaseId' | 'authorId' | 'categories' | 'commentCount' | 'commentStatus' | 'comments' | 'content' | 'contentType' | 'contentTypeName' | 'databaseId' | 'date' | 'dateGmt' | 'desiredSlug' | 'editingLockedBy' | 'enclosure' | 'enqueuedScripts' | 'enqueuedStylesheets' | 'excerpt' | 'featuredImage' | 'featuredImageDatabaseId' | 'featuredImageId' | 'guid' | 'id' | 'isContentNode' | 'isPreview' | 'isRestricted' | 'isRevision' | 'isSticky' | 'isTermNode' | 'lastEditedBy' | 'link' | 'modified' | 'modifiedGmt' | 'molonguiAuthors' | 'pingStatus' | 'pinged' | 'postFormats' | 'postId' | 'preview' | 'previewRevisionDatabaseId' | 'previewRevisionId' | 'revisionOf' | 'revisions' | 'seo' | 'slug' | 'status' | 'tags' | 'template' | 'terms' | 'title' | 'toPing' | 'uri' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	attachedMedia?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	authorId?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	commentCount?: FieldPolicy<any> | FieldReadFunction<any>,
	commentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	contentTypeName?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	dateGmt?: FieldPolicy<any> | FieldReadFunction<any>,
	desiredSlug?: FieldPolicy<any> | FieldReadFunction<any>,
	editingLockedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	enclosure?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>,
	excerpt?: FieldPolicy<any> | FieldReadFunction<any>,
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>,
	featuredImageDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	featuredImageId?: FieldPolicy<any> | FieldReadFunction<any>,
	guid?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	isRevision?: FieldPolicy<any> | FieldReadFunction<any>,
	isSticky?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	lastEditedBy?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	modified?: FieldPolicy<any> | FieldReadFunction<any>,
	modifiedGmt?: FieldPolicy<any> | FieldReadFunction<any>,
	molonguiAuthors?: FieldPolicy<any> | FieldReadFunction<any>,
	pingStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	pinged?: FieldPolicy<any> | FieldReadFunction<any>,
	postFormats?: FieldPolicy<any> | FieldReadFunction<any>,
	postId?: FieldPolicy<any> | FieldReadFunction<any>,
	preview?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>,
	revisionOf?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	template?: FieldPolicy<any> | FieldReadFunction<any>,
	terms?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	toPing?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PostConnectionKeySpecifier)[];
export type PostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostConnectionEdgeKeySpecifier = ('cursor' | 'node' | PostConnectionEdgeKeySpecifier)[];
export type PostConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PostConnectionPageInfoKeySpecifier)[];
export type PostConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostFormatKeySpecifier = ('contentNodes' | 'count' | 'databaseId' | 'description' | 'enqueuedScripts' | 'enqueuedStylesheets' | 'id' | 'isContentNode' | 'isRestricted' | 'isTermNode' | 'link' | 'name' | 'postFormatId' | 'posts' | 'seo' | 'slug' | 'taxonomy' | 'taxonomyName' | 'termGroupId' | 'termTaxonomyId' | 'uri' | PostFormatKeySpecifier)[];
export type PostFormatFieldPolicy = {
	contentNodes?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	postFormatId?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomy?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomyName?: FieldPolicy<any> | FieldReadFunction<any>,
	termGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostFormatConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PostFormatConnectionKeySpecifier)[];
export type PostFormatConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostFormatConnectionEdgeKeySpecifier = ('cursor' | 'node' | PostFormatConnectionEdgeKeySpecifier)[];
export type PostFormatConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostFormatConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PostFormatConnectionPageInfoKeySpecifier)[];
export type PostFormatConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostFormatToContentNodeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PostFormatToContentNodeConnectionKeySpecifier)[];
export type PostFormatToContentNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostFormatToContentNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | PostFormatToContentNodeConnectionEdgeKeySpecifier)[];
export type PostFormatToContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostFormatToContentNodeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PostFormatToContentNodeConnectionPageInfoKeySpecifier)[];
export type PostFormatToContentNodeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostFormatToPostConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PostFormatToPostConnectionKeySpecifier)[];
export type PostFormatToPostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostFormatToPostConnectionEdgeKeySpecifier = ('cursor' | 'node' | PostFormatToPostConnectionEdgeKeySpecifier)[];
export type PostFormatToPostConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostFormatToPostConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PostFormatToPostConnectionPageInfoKeySpecifier)[];
export type PostFormatToPostConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostFormatToTaxonomyConnectionEdgeKeySpecifier = ('cursor' | 'node' | PostFormatToTaxonomyConnectionEdgeKeySpecifier)[];
export type PostFormatToTaxonomyConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToCategoryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PostToCategoryConnectionKeySpecifier)[];
export type PostToCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToCategoryConnectionEdgeKeySpecifier = ('cursor' | 'isPrimary' | 'node' | PostToCategoryConnectionEdgeKeySpecifier)[];
export type PostToCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrimary?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToCategoryConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PostToCategoryConnectionPageInfoKeySpecifier)[];
export type PostToCategoryConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToCommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PostToCommentConnectionKeySpecifier)[];
export type PostToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToCommentConnectionEdgeKeySpecifier = ('cursor' | 'node' | PostToCommentConnectionEdgeKeySpecifier)[];
export type PostToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToCommentConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PostToCommentConnectionPageInfoKeySpecifier)[];
export type PostToCommentConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToPostFormatConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PostToPostFormatConnectionKeySpecifier)[];
export type PostToPostFormatConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToPostFormatConnectionEdgeKeySpecifier = ('cursor' | 'isPrimary' | 'node' | PostToPostFormatConnectionEdgeKeySpecifier)[];
export type PostToPostFormatConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrimary?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToPostFormatConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PostToPostFormatConnectionPageInfoKeySpecifier)[];
export type PostToPostFormatConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToPreviewConnectionEdgeKeySpecifier = ('cursor' | 'node' | PostToPreviewConnectionEdgeKeySpecifier)[];
export type PostToPreviewConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToRevisionConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PostToRevisionConnectionKeySpecifier)[];
export type PostToRevisionConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToRevisionConnectionEdgeKeySpecifier = ('cursor' | 'node' | PostToRevisionConnectionEdgeKeySpecifier)[];
export type PostToRevisionConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToRevisionConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PostToRevisionConnectionPageInfoKeySpecifier)[];
export type PostToRevisionConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToTagConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PostToTagConnectionKeySpecifier)[];
export type PostToTagConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToTagConnectionEdgeKeySpecifier = ('cursor' | 'isPrimary' | 'node' | PostToTagConnectionEdgeKeySpecifier)[];
export type PostToTagConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	isPrimary?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToTagConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PostToTagConnectionPageInfoKeySpecifier)[];
export type PostToTagConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToTermNodeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | PostToTermNodeConnectionKeySpecifier)[];
export type PostToTermNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToTermNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | PostToTermNodeConnectionEdgeKeySpecifier)[];
export type PostToTermNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostToTermNodeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | PostToTermNodeConnectionPageInfoKeySpecifier)[];
export type PostToTermNodeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostTypeLabelDetailsKeySpecifier = ('addNew' | 'addNewItem' | 'allItems' | 'archives' | 'attributes' | 'editItem' | 'featuredImage' | 'filterItemsList' | 'insertIntoItem' | 'itemsList' | 'itemsListNavigation' | 'menuName' | 'name' | 'newItem' | 'notFound' | 'notFoundInTrash' | 'parentItemColon' | 'removeFeaturedImage' | 'searchItems' | 'setFeaturedImage' | 'singularName' | 'uploadedToThisItem' | 'useFeaturedImage' | 'viewItem' | 'viewItems' | PostTypeLabelDetailsKeySpecifier)[];
export type PostTypeLabelDetailsFieldPolicy = {
	addNew?: FieldPolicy<any> | FieldReadFunction<any>,
	addNewItem?: FieldPolicy<any> | FieldReadFunction<any>,
	allItems?: FieldPolicy<any> | FieldReadFunction<any>,
	archives?: FieldPolicy<any> | FieldReadFunction<any>,
	attributes?: FieldPolicy<any> | FieldReadFunction<any>,
	editItem?: FieldPolicy<any> | FieldReadFunction<any>,
	featuredImage?: FieldPolicy<any> | FieldReadFunction<any>,
	filterItemsList?: FieldPolicy<any> | FieldReadFunction<any>,
	insertIntoItem?: FieldPolicy<any> | FieldReadFunction<any>,
	itemsList?: FieldPolicy<any> | FieldReadFunction<any>,
	itemsListNavigation?: FieldPolicy<any> | FieldReadFunction<any>,
	menuName?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	newItem?: FieldPolicy<any> | FieldReadFunction<any>,
	notFound?: FieldPolicy<any> | FieldReadFunction<any>,
	notFoundInTrash?: FieldPolicy<any> | FieldReadFunction<any>,
	parentItemColon?: FieldPolicy<any> | FieldReadFunction<any>,
	removeFeaturedImage?: FieldPolicy<any> | FieldReadFunction<any>,
	searchItems?: FieldPolicy<any> | FieldReadFunction<any>,
	setFeaturedImage?: FieldPolicy<any> | FieldReadFunction<any>,
	singularName?: FieldPolicy<any> | FieldReadFunction<any>,
	uploadedToThisItem?: FieldPolicy<any> | FieldReadFunction<any>,
	useFeaturedImage?: FieldPolicy<any> | FieldReadFunction<any>,
	viewItem?: FieldPolicy<any> | FieldReadFunction<any>,
	viewItems?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostTypeSEOKeySpecifier = ('breadcrumbs' | 'canonical' | 'cornerstone' | 'focuskw' | 'fullHead' | 'metaDesc' | 'metaKeywords' | 'metaRobotsNofollow' | 'metaRobotsNoindex' | 'opengraphAuthor' | 'opengraphDescription' | 'opengraphImage' | 'opengraphModifiedTime' | 'opengraphPublishedTime' | 'opengraphPublisher' | 'opengraphSiteName' | 'opengraphTitle' | 'opengraphType' | 'opengraphUrl' | 'readingTime' | 'schema' | 'title' | 'twitterDescription' | 'twitterImage' | 'twitterTitle' | PostTypeSEOKeySpecifier)[];
export type PostTypeSEOFieldPolicy = {
	breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical?: FieldPolicy<any> | FieldReadFunction<any>,
	cornerstone?: FieldPolicy<any> | FieldReadFunction<any>,
	focuskw?: FieldPolicy<any> | FieldReadFunction<any>,
	fullHead?: FieldPolicy<any> | FieldReadFunction<any>,
	metaDesc?: FieldPolicy<any> | FieldReadFunction<any>,
	metaKeywords?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobotsNofollow?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphImage?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphModifiedTime?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphPublishedTime?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphPublisher?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphSiteName?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphType?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	readingTime?: FieldPolicy<any> | FieldReadFunction<any>,
	schema?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterImage?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterTitle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PreviewableKeySpecifier = ('isPreview' | 'previewRevisionDatabaseId' | 'previewRevisionId' | PreviewableKeySpecifier)[];
export type PreviewableFieldPolicy = {
	isPreview?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRevisionDatabaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewRevisionId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ReadingSettingsKeySpecifier = ('pageForPosts' | 'pageOnFront' | 'postsPerPage' | 'showOnFront' | ReadingSettingsKeySpecifier)[];
export type ReadingSettingsFieldPolicy = {
	pageForPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	pageOnFront?: FieldPolicy<any> | FieldReadFunction<any>,
	postsPerPage?: FieldPolicy<any> | FieldReadFunction<any>,
	showOnFront?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RefreshJwtAuthTokenPayloadKeySpecifier = ('authToken' | 'clientMutationId' | RefreshJwtAuthTokenPayloadKeySpecifier)[];
export type RefreshJwtAuthTokenPayloadFieldPolicy = {
	authToken?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegisterUserPayloadKeySpecifier = ('clientMutationId' | 'user' | RegisterUserPayloadKeySpecifier)[];
export type RegisterUserPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ResetUserPasswordPayloadKeySpecifier = ('clientMutationId' | 'user' | ResetUserPasswordPayloadKeySpecifier)[];
export type ResetUserPasswordPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RestoreCommentPayloadKeySpecifier = ('clientMutationId' | 'comment' | 'restoredId' | RestoreCommentPayloadKeySpecifier)[];
export type RestoreCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	restoredId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootMutationKeySpecifier = ('createCategory' | 'createComment' | 'createMediaItem' | 'createPage' | 'createPost' | 'createPostFormat' | 'createTag' | 'createUser' | 'deleteCategory' | 'deleteComment' | 'deleteMediaItem' | 'deletePage' | 'deletePost' | 'deletePostFormat' | 'deleteTag' | 'deleteUser' | 'increaseCount' | 'login' | 'refreshJwtAuthToken' | 'registerUser' | 'resetUserPassword' | 'restoreComment' | 'sendPasswordResetEmail' | 'updateCategory' | 'updateComment' | 'updateMediaItem' | 'updatePage' | 'updatePost' | 'updatePostFormat' | 'updateSettings' | 'updateTag' | 'updateUser' | RootMutationKeySpecifier)[];
export type RootMutationFieldPolicy = {
	createCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	createComment?: FieldPolicy<any> | FieldReadFunction<any>,
	createMediaItem?: FieldPolicy<any> | FieldReadFunction<any>,
	createPage?: FieldPolicy<any> | FieldReadFunction<any>,
	createPost?: FieldPolicy<any> | FieldReadFunction<any>,
	createPostFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	createTag?: FieldPolicy<any> | FieldReadFunction<any>,
	createUser?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteComment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMediaItem?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePage?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePost?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePostFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTag?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteUser?: FieldPolicy<any> | FieldReadFunction<any>,
	increaseCount?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	refreshJwtAuthToken?: FieldPolicy<any> | FieldReadFunction<any>,
	registerUser?: FieldPolicy<any> | FieldReadFunction<any>,
	resetUserPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	restoreComment?: FieldPolicy<any> | FieldReadFunction<any>,
	sendPasswordResetEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	updateComment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMediaItem?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePage?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePost?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePostFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	updateSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTag?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryKeySpecifier = ('allSettings' | 'categories' | 'category' | 'comment' | 'comments' | 'contentNode' | 'contentNodes' | 'contentType' | 'contentTypes' | 'discussionSettings' | 'generalSettings' | 'mediaItem' | 'mediaItemBy' | 'mediaItems' | 'menu' | 'menuItem' | 'menuItems' | 'menus' | 'molonguiAuthor' | 'node' | 'nodeByUri' | 'page' | 'pageBy' | 'pages' | 'plugin' | 'plugins' | 'post' | 'postBy' | 'postFormat' | 'postFormats' | 'posts' | 'readingSettings' | 'registeredScripts' | 'registeredStylesheets' | 'revisions' | 'seo' | 'tag' | 'tags' | 'taxonomies' | 'taxonomy' | 'termNode' | 'terms' | 'theme' | 'themes' | 'user' | 'userRole' | 'userRoles' | 'users' | 'viewer' | 'writingSettings' | RootQueryKeySpecifier)[];
export type RootQueryFieldPolicy = {
	allSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	categories?: FieldPolicy<any> | FieldReadFunction<any>,
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	contentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	contentNodes?: FieldPolicy<any> | FieldReadFunction<any>,
	contentType?: FieldPolicy<any> | FieldReadFunction<any>,
	contentTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	discussionSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	generalSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaItem?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaItemBy?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaItems?: FieldPolicy<any> | FieldReadFunction<any>,
	menu?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItem?: FieldPolicy<any> | FieldReadFunction<any>,
	menuItems?: FieldPolicy<any> | FieldReadFunction<any>,
	menus?: FieldPolicy<any> | FieldReadFunction<any>,
	molonguiAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>,
	nodeByUri?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	pageBy?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	plugin?: FieldPolicy<any> | FieldReadFunction<any>,
	plugins?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>,
	postBy?: FieldPolicy<any> | FieldReadFunction<any>,
	postFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	postFormats?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	readingSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	registeredScripts?: FieldPolicy<any> | FieldReadFunction<any>,
	registeredStylesheets?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomies?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomy?: FieldPolicy<any> | FieldReadFunction<any>,
	termNode?: FieldPolicy<any> | FieldReadFunction<any>,
	terms?: FieldPolicy<any> | FieldReadFunction<any>,
	theme?: FieldPolicy<any> | FieldReadFunction<any>,
	themes?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>,
	userRole?: FieldPolicy<any> | FieldReadFunction<any>,
	userRoles?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>,
	viewer?: FieldPolicy<any> | FieldReadFunction<any>,
	writingSettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToCategoryConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToCategoryConnectionKeySpecifier)[];
export type RootQueryToCategoryConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToCategoryConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToCategoryConnectionEdgeKeySpecifier)[];
export type RootQueryToCategoryConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToCategoryConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToCategoryConnectionPageInfoKeySpecifier)[];
export type RootQueryToCategoryConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToCommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToCommentConnectionKeySpecifier)[];
export type RootQueryToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToCommentConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToCommentConnectionEdgeKeySpecifier)[];
export type RootQueryToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToCommentConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToCommentConnectionPageInfoKeySpecifier)[];
export type RootQueryToCommentConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToContentNodeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToContentNodeConnectionKeySpecifier)[];
export type RootQueryToContentNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToContentNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToContentNodeConnectionEdgeKeySpecifier)[];
export type RootQueryToContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToContentNodeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToContentNodeConnectionPageInfoKeySpecifier)[];
export type RootQueryToContentNodeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToContentTypeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToContentTypeConnectionKeySpecifier)[];
export type RootQueryToContentTypeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToContentTypeConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToContentTypeConnectionEdgeKeySpecifier)[];
export type RootQueryToContentTypeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToContentTypeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToContentTypeConnectionPageInfoKeySpecifier)[];
export type RootQueryToContentTypeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToEnqueuedScriptConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToEnqueuedScriptConnectionKeySpecifier)[];
export type RootQueryToEnqueuedScriptConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToEnqueuedScriptConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToEnqueuedScriptConnectionEdgeKeySpecifier)[];
export type RootQueryToEnqueuedScriptConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToEnqueuedScriptConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToEnqueuedScriptConnectionPageInfoKeySpecifier)[];
export type RootQueryToEnqueuedScriptConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToEnqueuedStylesheetConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToEnqueuedStylesheetConnectionKeySpecifier)[];
export type RootQueryToEnqueuedStylesheetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToEnqueuedStylesheetConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToEnqueuedStylesheetConnectionEdgeKeySpecifier)[];
export type RootQueryToEnqueuedStylesheetConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToEnqueuedStylesheetConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToEnqueuedStylesheetConnectionPageInfoKeySpecifier)[];
export type RootQueryToEnqueuedStylesheetConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToMediaItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToMediaItemConnectionKeySpecifier)[];
export type RootQueryToMediaItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToMediaItemConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToMediaItemConnectionEdgeKeySpecifier)[];
export type RootQueryToMediaItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToMediaItemConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToMediaItemConnectionPageInfoKeySpecifier)[];
export type RootQueryToMediaItemConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToMenuConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToMenuConnectionKeySpecifier)[];
export type RootQueryToMenuConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToMenuConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToMenuConnectionEdgeKeySpecifier)[];
export type RootQueryToMenuConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToMenuConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToMenuConnectionPageInfoKeySpecifier)[];
export type RootQueryToMenuConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToMenuItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToMenuItemConnectionKeySpecifier)[];
export type RootQueryToMenuItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToMenuItemConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToMenuItemConnectionEdgeKeySpecifier)[];
export type RootQueryToMenuItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToMenuItemConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToMenuItemConnectionPageInfoKeySpecifier)[];
export type RootQueryToMenuItemConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToPageConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToPageConnectionKeySpecifier)[];
export type RootQueryToPageConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToPageConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToPageConnectionEdgeKeySpecifier)[];
export type RootQueryToPageConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToPageConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToPageConnectionPageInfoKeySpecifier)[];
export type RootQueryToPageConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToPluginConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToPluginConnectionKeySpecifier)[];
export type RootQueryToPluginConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToPluginConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToPluginConnectionEdgeKeySpecifier)[];
export type RootQueryToPluginConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToPluginConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToPluginConnectionPageInfoKeySpecifier)[];
export type RootQueryToPluginConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToPostConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToPostConnectionKeySpecifier)[];
export type RootQueryToPostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToPostConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToPostConnectionEdgeKeySpecifier)[];
export type RootQueryToPostConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToPostConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToPostConnectionPageInfoKeySpecifier)[];
export type RootQueryToPostConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToPostFormatConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToPostFormatConnectionKeySpecifier)[];
export type RootQueryToPostFormatConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToPostFormatConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToPostFormatConnectionEdgeKeySpecifier)[];
export type RootQueryToPostFormatConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToPostFormatConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToPostFormatConnectionPageInfoKeySpecifier)[];
export type RootQueryToPostFormatConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToRevisionsConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToRevisionsConnectionKeySpecifier)[];
export type RootQueryToRevisionsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToRevisionsConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToRevisionsConnectionEdgeKeySpecifier)[];
export type RootQueryToRevisionsConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToRevisionsConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToRevisionsConnectionPageInfoKeySpecifier)[];
export type RootQueryToRevisionsConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToTagConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToTagConnectionKeySpecifier)[];
export type RootQueryToTagConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToTagConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToTagConnectionEdgeKeySpecifier)[];
export type RootQueryToTagConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToTagConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToTagConnectionPageInfoKeySpecifier)[];
export type RootQueryToTagConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToTaxonomyConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToTaxonomyConnectionKeySpecifier)[];
export type RootQueryToTaxonomyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToTaxonomyConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToTaxonomyConnectionEdgeKeySpecifier)[];
export type RootQueryToTaxonomyConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToTaxonomyConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToTaxonomyConnectionPageInfoKeySpecifier)[];
export type RootQueryToTaxonomyConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToTermNodeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToTermNodeConnectionKeySpecifier)[];
export type RootQueryToTermNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToTermNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToTermNodeConnectionEdgeKeySpecifier)[];
export type RootQueryToTermNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToTermNodeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToTermNodeConnectionPageInfoKeySpecifier)[];
export type RootQueryToTermNodeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToThemeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToThemeConnectionKeySpecifier)[];
export type RootQueryToThemeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToThemeConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToThemeConnectionEdgeKeySpecifier)[];
export type RootQueryToThemeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToThemeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToThemeConnectionPageInfoKeySpecifier)[];
export type RootQueryToThemeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToUserConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToUserConnectionKeySpecifier)[];
export type RootQueryToUserConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToUserConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToUserConnectionEdgeKeySpecifier)[];
export type RootQueryToUserConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToUserConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToUserConnectionPageInfoKeySpecifier)[];
export type RootQueryToUserConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToUserRoleConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | RootQueryToUserRoleConnectionKeySpecifier)[];
export type RootQueryToUserRoleConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToUserRoleConnectionEdgeKeySpecifier = ('cursor' | 'node' | RootQueryToUserRoleConnectionEdgeKeySpecifier)[];
export type RootQueryToUserRoleConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RootQueryToUserRoleConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | RootQueryToUserRoleConnectionPageInfoKeySpecifier)[];
export type RootQueryToUserRoleConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOBreadcrumbsKeySpecifier = ('archivePrefix' | 'boldLast' | 'enabled' | 'homeText' | 'notFoundText' | 'prefix' | 'searchPrefix' | 'separator' | 'showBlogPage' | SEOBreadcrumbsKeySpecifier)[];
export type SEOBreadcrumbsFieldPolicy = {
	archivePrefix?: FieldPolicy<any> | FieldReadFunction<any>,
	boldLast?: FieldPolicy<any> | FieldReadFunction<any>,
	enabled?: FieldPolicy<any> | FieldReadFunction<any>,
	homeText?: FieldPolicy<any> | FieldReadFunction<any>,
	notFoundText?: FieldPolicy<any> | FieldReadFunction<any>,
	prefix?: FieldPolicy<any> | FieldReadFunction<any>,
	searchPrefix?: FieldPolicy<any> | FieldReadFunction<any>,
	separator?: FieldPolicy<any> | FieldReadFunction<any>,
	showBlogPage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOConfigKeySpecifier = ('breadcrumbs' | 'contentTypes' | 'meta' | 'openGraph' | 'redirects' | 'schema' | 'social' | 'webmaster' | SEOConfigKeySpecifier)[];
export type SEOConfigFieldPolicy = {
	breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>,
	contentTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	meta?: FieldPolicy<any> | FieldReadFunction<any>,
	openGraph?: FieldPolicy<any> | FieldReadFunction<any>,
	redirects?: FieldPolicy<any> | FieldReadFunction<any>,
	schema?: FieldPolicy<any> | FieldReadFunction<any>,
	social?: FieldPolicy<any> | FieldReadFunction<any>,
	webmaster?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOContentTypeKeySpecifier = ('archive' | 'metaDesc' | 'metaRobotsNoindex' | 'schema' | 'schemaType' | 'title' | SEOContentTypeKeySpecifier)[];
export type SEOContentTypeFieldPolicy = {
	archive?: FieldPolicy<any> | FieldReadFunction<any>,
	metaDesc?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>,
	schema?: FieldPolicy<any> | FieldReadFunction<any>,
	schemaType?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOContentTypeArchiveKeySpecifier = ('archiveLink' | 'breadcrumbTitle' | 'fullHead' | 'hasArchive' | 'metaDesc' | 'metaRobotsFollow' | 'metaRobotsIndex' | 'metaRobotsNofollow' | 'metaRobotsNoindex' | 'title' | SEOContentTypeArchiveKeySpecifier)[];
export type SEOContentTypeArchiveFieldPolicy = {
	archiveLink?: FieldPolicy<any> | FieldReadFunction<any>,
	breadcrumbTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	fullHead?: FieldPolicy<any> | FieldReadFunction<any>,
	hasArchive?: FieldPolicy<any> | FieldReadFunction<any>,
	metaDesc?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobotsFollow?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobotsIndex?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobotsNofollow?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOContentTypesKeySpecifier = ('mediaItem' | 'page' | 'post' | SEOContentTypesKeySpecifier)[];
export type SEOContentTypesFieldPolicy = {
	mediaItem?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOGlobalMetaKeySpecifier = ('author' | 'config' | 'date' | 'homepage' | 'notFound' | SEOGlobalMetaKeySpecifier)[];
export type SEOGlobalMetaFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	config?: FieldPolicy<any> | FieldReadFunction<any>,
	date?: FieldPolicy<any> | FieldReadFunction<any>,
	homepage?: FieldPolicy<any> | FieldReadFunction<any>,
	notFound?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOGlobalMeta404KeySpecifier = ('breadcrumb' | 'title' | SEOGlobalMeta404KeySpecifier)[];
export type SEOGlobalMeta404FieldPolicy = {
	breadcrumb?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOGlobalMetaAuthorKeySpecifier = ('description' | 'title' | SEOGlobalMetaAuthorKeySpecifier)[];
export type SEOGlobalMetaAuthorFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOGlobalMetaConfigKeySpecifier = ('separator' | SEOGlobalMetaConfigKeySpecifier)[];
export type SEOGlobalMetaConfigFieldPolicy = {
	separator?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOGlobalMetaDateKeySpecifier = ('description' | 'title' | SEOGlobalMetaDateKeySpecifier)[];
export type SEOGlobalMetaDateFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOGlobalMetaHomeKeySpecifier = ('description' | 'title' | SEOGlobalMetaHomeKeySpecifier)[];
export type SEOGlobalMetaHomeFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOOpenGraphKeySpecifier = ('defaultImage' | 'frontPage' | SEOOpenGraphKeySpecifier)[];
export type SEOOpenGraphFieldPolicy = {
	defaultImage?: FieldPolicy<any> | FieldReadFunction<any>,
	frontPage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOOpenGraphFrontPageKeySpecifier = ('description' | 'image' | 'title' | SEOOpenGraphFrontPageKeySpecifier)[];
export type SEOOpenGraphFrontPageFieldPolicy = {
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	image?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOPageInfoSchemaKeySpecifier = ('raw' | SEOPageInfoSchemaKeySpecifier)[];
export type SEOPageInfoSchemaFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOPostTypeBreadcrumbsKeySpecifier = ('text' | 'url' | SEOPostTypeBreadcrumbsKeySpecifier)[];
export type SEOPostTypeBreadcrumbsFieldPolicy = {
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOPostTypePageInfoKeySpecifier = ('schema' | SEOPostTypePageInfoKeySpecifier)[];
export type SEOPostTypePageInfoFieldPolicy = {
	schema?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOPostTypeSchemaKeySpecifier = ('articleType' | 'pageType' | 'raw' | SEOPostTypeSchemaKeySpecifier)[];
export type SEOPostTypeSchemaFieldPolicy = {
	articleType?: FieldPolicy<any> | FieldReadFunction<any>,
	pageType?: FieldPolicy<any> | FieldReadFunction<any>,
	raw?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEORedirectKeySpecifier = ('format' | 'origin' | 'target' | 'type' | SEORedirectKeySpecifier)[];
export type SEORedirectFieldPolicy = {
	format?: FieldPolicy<any> | FieldReadFunction<any>,
	origin?: FieldPolicy<any> | FieldReadFunction<any>,
	target?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOSchemaKeySpecifier = ('companyLogo' | 'companyName' | 'companyOrPerson' | 'homeUrl' | 'inLanguage' | 'logo' | 'personLogo' | 'personName' | 'siteName' | 'siteUrl' | 'wordpressSiteName' | SEOSchemaKeySpecifier)[];
export type SEOSchemaFieldPolicy = {
	companyLogo?: FieldPolicy<any> | FieldReadFunction<any>,
	companyName?: FieldPolicy<any> | FieldReadFunction<any>,
	companyOrPerson?: FieldPolicy<any> | FieldReadFunction<any>,
	homeUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	inLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	personLogo?: FieldPolicy<any> | FieldReadFunction<any>,
	personName?: FieldPolicy<any> | FieldReadFunction<any>,
	siteName?: FieldPolicy<any> | FieldReadFunction<any>,
	siteUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	wordpressSiteName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOSocialKeySpecifier = ('facebook' | 'instagram' | 'linkedIn' | 'mySpace' | 'otherSocials' | 'pinterest' | 'twitter' | 'wikipedia' | 'youTube' | SEOSocialKeySpecifier)[];
export type SEOSocialFieldPolicy = {
	facebook?: FieldPolicy<any> | FieldReadFunction<any>,
	instagram?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedIn?: FieldPolicy<any> | FieldReadFunction<any>,
	mySpace?: FieldPolicy<any> | FieldReadFunction<any>,
	otherSocials?: FieldPolicy<any> | FieldReadFunction<any>,
	pinterest?: FieldPolicy<any> | FieldReadFunction<any>,
	twitter?: FieldPolicy<any> | FieldReadFunction<any>,
	wikipedia?: FieldPolicy<any> | FieldReadFunction<any>,
	youTube?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOSocialFacebookKeySpecifier = ('defaultImage' | 'url' | SEOSocialFacebookKeySpecifier)[];
export type SEOSocialFacebookFieldPolicy = {
	defaultImage?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOSocialInstagramKeySpecifier = ('url' | SEOSocialInstagramKeySpecifier)[];
export type SEOSocialInstagramFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOSocialLinkedInKeySpecifier = ('url' | SEOSocialLinkedInKeySpecifier)[];
export type SEOSocialLinkedInFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOSocialMySpaceKeySpecifier = ('url' | SEOSocialMySpaceKeySpecifier)[];
export type SEOSocialMySpaceFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOSocialPinterestKeySpecifier = ('metaTag' | 'url' | SEOSocialPinterestKeySpecifier)[];
export type SEOSocialPinterestFieldPolicy = {
	metaTag?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOSocialTwitterKeySpecifier = ('cardType' | 'username' | SEOSocialTwitterKeySpecifier)[];
export type SEOSocialTwitterFieldPolicy = {
	cardType?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOSocialWikipediaKeySpecifier = ('url' | SEOSocialWikipediaKeySpecifier)[];
export type SEOSocialWikipediaFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOSocialYoutubeKeySpecifier = ('url' | SEOSocialYoutubeKeySpecifier)[];
export type SEOSocialYoutubeFieldPolicy = {
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOTaxonomySchemaKeySpecifier = ('raw' | SEOTaxonomySchemaKeySpecifier)[];
export type SEOTaxonomySchemaFieldPolicy = {
	raw?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOUserKeySpecifier = ('breadcrumbTitle' | 'canonical' | 'fullHead' | 'language' | 'metaDesc' | 'metaRobotsNofollow' | 'metaRobotsNoindex' | 'opengraphDescription' | 'opengraphImage' | 'opengraphTitle' | 'region' | 'schema' | 'social' | 'title' | 'twitterDescription' | 'twitterImage' | 'twitterTitle' | SEOUserKeySpecifier)[];
export type SEOUserFieldPolicy = {
	breadcrumbTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical?: FieldPolicy<any> | FieldReadFunction<any>,
	fullHead?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	metaDesc?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobotsNofollow?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphImage?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	schema?: FieldPolicy<any> | FieldReadFunction<any>,
	social?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterImage?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterTitle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOUserSchemaKeySpecifier = ('articleType' | 'pageType' | 'raw' | SEOUserSchemaKeySpecifier)[];
export type SEOUserSchemaFieldPolicy = {
	articleType?: FieldPolicy<any> | FieldReadFunction<any>,
	pageType?: FieldPolicy<any> | FieldReadFunction<any>,
	raw?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOUserSocialKeySpecifier = ('facebook' | 'instagram' | 'linkedIn' | 'mySpace' | 'pinterest' | 'soundCloud' | 'twitter' | 'wikipedia' | 'youTube' | SEOUserSocialKeySpecifier)[];
export type SEOUserSocialFieldPolicy = {
	facebook?: FieldPolicy<any> | FieldReadFunction<any>,
	instagram?: FieldPolicy<any> | FieldReadFunction<any>,
	linkedIn?: FieldPolicy<any> | FieldReadFunction<any>,
	mySpace?: FieldPolicy<any> | FieldReadFunction<any>,
	pinterest?: FieldPolicy<any> | FieldReadFunction<any>,
	soundCloud?: FieldPolicy<any> | FieldReadFunction<any>,
	twitter?: FieldPolicy<any> | FieldReadFunction<any>,
	wikipedia?: FieldPolicy<any> | FieldReadFunction<any>,
	youTube?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SEOWebmasterKeySpecifier = ('baiduVerify' | 'googleVerify' | 'msVerify' | 'yandexVerify' | SEOWebmasterKeySpecifier)[];
export type SEOWebmasterFieldPolicy = {
	baiduVerify?: FieldPolicy<any> | FieldReadFunction<any>,
	googleVerify?: FieldPolicy<any> | FieldReadFunction<any>,
	msVerify?: FieldPolicy<any> | FieldReadFunction<any>,
	yandexVerify?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SendPasswordResetEmailPayloadKeySpecifier = ('clientMutationId' | 'success' | 'user' | SendPasswordResetEmailPayloadKeySpecifier)[];
export type SendPasswordResetEmailPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SettingsKeySpecifier = ('discussionSettingsDefaultCommentStatus' | 'discussionSettingsDefaultPingStatus' | 'generalSettingsDateFormat' | 'generalSettingsDescription' | 'generalSettingsEmail' | 'generalSettingsLanguage' | 'generalSettingsStartOfWeek' | 'generalSettingsTimeFormat' | 'generalSettingsTimezone' | 'generalSettingsTitle' | 'generalSettingsUrl' | 'readingSettingsPageForPosts' | 'readingSettingsPageOnFront' | 'readingSettingsPostsPerPage' | 'readingSettingsShowOnFront' | 'writingSettingsDefaultCategory' | 'writingSettingsDefaultPostFormat' | 'writingSettingsUseSmilies' | SettingsKeySpecifier)[];
export type SettingsFieldPolicy = {
	discussionSettingsDefaultCommentStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	discussionSettingsDefaultPingStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	generalSettingsDateFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	generalSettingsDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	generalSettingsEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	generalSettingsLanguage?: FieldPolicy<any> | FieldReadFunction<any>,
	generalSettingsStartOfWeek?: FieldPolicy<any> | FieldReadFunction<any>,
	generalSettingsTimeFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	generalSettingsTimezone?: FieldPolicy<any> | FieldReadFunction<any>,
	generalSettingsTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	generalSettingsUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	readingSettingsPageForPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	readingSettingsPageOnFront?: FieldPolicy<any> | FieldReadFunction<any>,
	readingSettingsPostsPerPage?: FieldPolicy<any> | FieldReadFunction<any>,
	readingSettingsShowOnFront?: FieldPolicy<any> | FieldReadFunction<any>,
	writingSettingsDefaultCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	writingSettingsDefaultPostFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	writingSettingsUseSmilies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagKeySpecifier = ('contentNodes' | 'count' | 'databaseId' | 'description' | 'enqueuedScripts' | 'enqueuedStylesheets' | 'id' | 'isContentNode' | 'isRestricted' | 'isTermNode' | 'link' | 'name' | 'posts' | 'seo' | 'slug' | 'tagId' | 'taxonomy' | 'taxonomyName' | 'termGroupId' | 'termTaxonomyId' | 'uri' | TagKeySpecifier)[];
export type TagFieldPolicy = {
	contentNodes?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	tagId?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomy?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomyName?: FieldPolicy<any> | FieldReadFunction<any>,
	termGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | TagConnectionKeySpecifier)[];
export type TagConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagConnectionEdgeKeySpecifier = ('cursor' | 'node' | TagConnectionEdgeKeySpecifier)[];
export type TagConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | TagConnectionPageInfoKeySpecifier)[];
export type TagConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagToContentNodeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | TagToContentNodeConnectionKeySpecifier)[];
export type TagToContentNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagToContentNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | TagToContentNodeConnectionEdgeKeySpecifier)[];
export type TagToContentNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagToContentNodeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | TagToContentNodeConnectionPageInfoKeySpecifier)[];
export type TagToContentNodeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagToPostConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | TagToPostConnectionKeySpecifier)[];
export type TagToPostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagToPostConnectionEdgeKeySpecifier = ('cursor' | 'node' | TagToPostConnectionEdgeKeySpecifier)[];
export type TagToPostConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagToPostConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | TagToPostConnectionPageInfoKeySpecifier)[];
export type TagToPostConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TagToTaxonomyConnectionEdgeKeySpecifier = ('cursor' | 'node' | TagToTaxonomyConnectionEdgeKeySpecifier)[];
export type TagToTaxonomyConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyKeySpecifier = ('connectedContentTypes' | 'connectedTerms' | 'description' | 'graphqlPluralName' | 'graphqlSingleName' | 'hierarchical' | 'id' | 'isRestricted' | 'label' | 'name' | 'public' | 'restBase' | 'restControllerClass' | 'showCloud' | 'showInAdminColumn' | 'showInGraphql' | 'showInMenu' | 'showInNavMenus' | 'showInQuickEdit' | 'showInRest' | 'showUi' | TaxonomyKeySpecifier)[];
export type TaxonomyFieldPolicy = {
	connectedContentTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	connectedTerms?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	graphqlPluralName?: FieldPolicy<any> | FieldReadFunction<any>,
	graphqlSingleName?: FieldPolicy<any> | FieldReadFunction<any>,
	hierarchical?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	label?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	public?: FieldPolicy<any> | FieldReadFunction<any>,
	restBase?: FieldPolicy<any> | FieldReadFunction<any>,
	restControllerClass?: FieldPolicy<any> | FieldReadFunction<any>,
	showCloud?: FieldPolicy<any> | FieldReadFunction<any>,
	showInAdminColumn?: FieldPolicy<any> | FieldReadFunction<any>,
	showInGraphql?: FieldPolicy<any> | FieldReadFunction<any>,
	showInMenu?: FieldPolicy<any> | FieldReadFunction<any>,
	showInNavMenus?: FieldPolicy<any> | FieldReadFunction<any>,
	showInQuickEdit?: FieldPolicy<any> | FieldReadFunction<any>,
	showInRest?: FieldPolicy<any> | FieldReadFunction<any>,
	showUi?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | TaxonomyConnectionKeySpecifier)[];
export type TaxonomyConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyConnectionEdgeKeySpecifier = ('cursor' | 'node' | TaxonomyConnectionEdgeKeySpecifier)[];
export type TaxonomyConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | TaxonomyConnectionPageInfoKeySpecifier)[];
export type TaxonomyConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomySEOKeySpecifier = ('breadcrumbs' | 'canonical' | 'cornerstone' | 'focuskw' | 'fullHead' | 'metaDesc' | 'metaKeywords' | 'metaRobotsNofollow' | 'metaRobotsNoindex' | 'opengraphAuthor' | 'opengraphDescription' | 'opengraphImage' | 'opengraphModifiedTime' | 'opengraphPublishedTime' | 'opengraphPublisher' | 'opengraphSiteName' | 'opengraphTitle' | 'opengraphType' | 'opengraphUrl' | 'schema' | 'title' | 'twitterDescription' | 'twitterImage' | 'twitterTitle' | TaxonomySEOKeySpecifier)[];
export type TaxonomySEOFieldPolicy = {
	breadcrumbs?: FieldPolicy<any> | FieldReadFunction<any>,
	canonical?: FieldPolicy<any> | FieldReadFunction<any>,
	cornerstone?: FieldPolicy<any> | FieldReadFunction<any>,
	focuskw?: FieldPolicy<any> | FieldReadFunction<any>,
	fullHead?: FieldPolicy<any> | FieldReadFunction<any>,
	metaDesc?: FieldPolicy<any> | FieldReadFunction<any>,
	metaKeywords?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobotsNofollow?: FieldPolicy<any> | FieldReadFunction<any>,
	metaRobotsNoindex?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphAuthor?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphImage?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphModifiedTime?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphPublishedTime?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphPublisher?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphSiteName?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphType?: FieldPolicy<any> | FieldReadFunction<any>,
	opengraphUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	schema?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterDescription?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterImage?: FieldPolicy<any> | FieldReadFunction<any>,
	twitterTitle?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyToContentTypeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | TaxonomyToContentTypeConnectionKeySpecifier)[];
export type TaxonomyToContentTypeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyToContentTypeConnectionEdgeKeySpecifier = ('cursor' | 'node' | TaxonomyToContentTypeConnectionEdgeKeySpecifier)[];
export type TaxonomyToContentTypeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyToContentTypeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | TaxonomyToContentTypeConnectionPageInfoKeySpecifier)[];
export type TaxonomyToContentTypeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyToTermNodeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | TaxonomyToTermNodeConnectionKeySpecifier)[];
export type TaxonomyToTermNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyToTermNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | TaxonomyToTermNodeConnectionEdgeKeySpecifier)[];
export type TaxonomyToTermNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TaxonomyToTermNodeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | TaxonomyToTermNodeConnectionPageInfoKeySpecifier)[];
export type TaxonomyToTermNodeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Template_ContactPageKeySpecifier = ('templateName' | Template_ContactPageKeySpecifier)[];
export type Template_ContactPageFieldPolicy = {
	templateName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type Template_GalleryPageKeySpecifier = ('templateName' | Template_GalleryPageKeySpecifier)[];
export type Template_GalleryPageFieldPolicy = {
	templateName?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TermNodeKeySpecifier = ('count' | 'databaseId' | 'description' | 'enqueuedScripts' | 'enqueuedStylesheets' | 'id' | 'isContentNode' | 'isRestricted' | 'isTermNode' | 'link' | 'name' | 'slug' | 'taxonomyName' | 'termGroupId' | 'termTaxonomyId' | 'uri' | TermNodeKeySpecifier)[];
export type TermNodeFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	taxonomyName?: FieldPolicy<any> | FieldReadFunction<any>,
	termGroupId?: FieldPolicy<any> | FieldReadFunction<any>,
	termTaxonomyId?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TermNodeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | TermNodeConnectionKeySpecifier)[];
export type TermNodeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TermNodeConnectionEdgeKeySpecifier = ('cursor' | 'node' | TermNodeConnectionEdgeKeySpecifier)[];
export type TermNodeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TermNodeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | TermNodeConnectionPageInfoKeySpecifier)[];
export type TermNodeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TermNodeToEnqueuedScriptConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | TermNodeToEnqueuedScriptConnectionKeySpecifier)[];
export type TermNodeToEnqueuedScriptConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TermNodeToEnqueuedScriptConnectionEdgeKeySpecifier = ('cursor' | 'node' | TermNodeToEnqueuedScriptConnectionEdgeKeySpecifier)[];
export type TermNodeToEnqueuedScriptConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TermNodeToEnqueuedScriptConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | TermNodeToEnqueuedScriptConnectionPageInfoKeySpecifier)[];
export type TermNodeToEnqueuedScriptConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TermNodeToEnqueuedStylesheetConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | TermNodeToEnqueuedStylesheetConnectionKeySpecifier)[];
export type TermNodeToEnqueuedStylesheetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TermNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier = ('cursor' | 'node' | TermNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier)[];
export type TermNodeToEnqueuedStylesheetConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TermNodeToEnqueuedStylesheetConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | TermNodeToEnqueuedStylesheetConnectionPageInfoKeySpecifier)[];
export type TermNodeToEnqueuedStylesheetConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThemeKeySpecifier = ('author' | 'authorUri' | 'description' | 'id' | 'isRestricted' | 'name' | 'screenshot' | 'slug' | 'tags' | 'themeUri' | 'version' | ThemeKeySpecifier)[];
export type ThemeFieldPolicy = {
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	authorUri?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	screenshot?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	themeUri?: FieldPolicy<any> | FieldReadFunction<any>,
	version?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThemeConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | ThemeConnectionKeySpecifier)[];
export type ThemeConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThemeConnectionEdgeKeySpecifier = ('cursor' | 'node' | ThemeConnectionEdgeKeySpecifier)[];
export type ThemeConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ThemeConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | ThemeConnectionPageInfoKeySpecifier)[];
export type ThemeConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UniformResourceIdentifiableKeySpecifier = ('id' | 'isContentNode' | 'isTermNode' | 'uri' | UniformResourceIdentifiableKeySpecifier)[];
export type UniformResourceIdentifiableFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCategoryPayloadKeySpecifier = ('category' | 'clientMutationId' | UpdateCategoryPayloadKeySpecifier)[];
export type UpdateCategoryPayloadFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateCommentPayloadKeySpecifier = ('clientMutationId' | 'comment' | 'success' | UpdateCommentPayloadKeySpecifier)[];
export type UpdateCommentPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	success?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateMediaItemPayloadKeySpecifier = ('clientMutationId' | 'mediaItem' | UpdateMediaItemPayloadKeySpecifier)[];
export type UpdateMediaItemPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaItem?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePagePayloadKeySpecifier = ('clientMutationId' | 'page' | UpdatePagePayloadKeySpecifier)[];
export type UpdatePagePayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	page?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePostFormatPayloadKeySpecifier = ('clientMutationId' | 'postFormat' | UpdatePostFormatPayloadKeySpecifier)[];
export type UpdatePostFormatPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	postFormat?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdatePostPayloadKeySpecifier = ('clientMutationId' | 'post' | UpdatePostPayloadKeySpecifier)[];
export type UpdatePostPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateSettingsPayloadKeySpecifier = ('allSettings' | 'clientMutationId' | 'discussionSettings' | 'generalSettings' | 'readingSettings' | 'writingSettings' | UpdateSettingsPayloadKeySpecifier)[];
export type UpdateSettingsPayloadFieldPolicy = {
	allSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	discussionSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	generalSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	readingSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	writingSettings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateTagPayloadKeySpecifier = ('clientMutationId' | 'tag' | UpdateTagPayloadKeySpecifier)[];
export type UpdateTagPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UpdateUserPayloadKeySpecifier = ('clientMutationId' | 'user' | UpdateUserPayloadKeySpecifier)[];
export type UpdateUserPayloadFieldPolicy = {
	clientMutationId?: FieldPolicy<any> | FieldReadFunction<any>,
	user?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('avatar' | 'capKey' | 'capabilities' | 'comments' | 'databaseId' | 'description' | 'email' | 'enqueuedScripts' | 'enqueuedStylesheets' | 'extraCapabilities' | 'firstName' | 'id' | 'isContentNode' | 'isJwtAuthSecretRevoked' | 'isRestricted' | 'isTermNode' | 'jwtAuthExpiration' | 'jwtAuthToken' | 'jwtRefreshToken' | 'jwtUserSecret' | 'lastName' | 'locale' | 'mediaItems' | 'name' | 'nicename' | 'nickname' | 'pages' | 'posts' | 'registeredDate' | 'revisions' | 'roles' | 'seo' | 'shouldShowAdminToolbar' | 'slug' | 'uri' | 'url' | 'userId' | 'username' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	capKey?: FieldPolicy<any> | FieldReadFunction<any>,
	capabilities?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	databaseId?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedScripts?: FieldPolicy<any> | FieldReadFunction<any>,
	enqueuedStylesheets?: FieldPolicy<any> | FieldReadFunction<any>,
	extraCapabilities?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isContentNode?: FieldPolicy<any> | FieldReadFunction<any>,
	isJwtAuthSecretRevoked?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	isTermNode?: FieldPolicy<any> | FieldReadFunction<any>,
	jwtAuthExpiration?: FieldPolicy<any> | FieldReadFunction<any>,
	jwtAuthToken?: FieldPolicy<any> | FieldReadFunction<any>,
	jwtRefreshToken?: FieldPolicy<any> | FieldReadFunction<any>,
	jwtUserSecret?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	locale?: FieldPolicy<any> | FieldReadFunction<any>,
	mediaItems?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	nicename?: FieldPolicy<any> | FieldReadFunction<any>,
	nickname?: FieldPolicy<any> | FieldReadFunction<any>,
	pages?: FieldPolicy<any> | FieldReadFunction<any>,
	posts?: FieldPolicy<any> | FieldReadFunction<any>,
	registeredDate?: FieldPolicy<any> | FieldReadFunction<any>,
	revisions?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	shouldShowAdminToolbar?: FieldPolicy<any> | FieldReadFunction<any>,
	slug?: FieldPolicy<any> | FieldReadFunction<any>,
	uri?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	userId?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | UserConnectionKeySpecifier)[];
export type UserConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionEdgeKeySpecifier = ('cursor' | 'node' | UserConnectionEdgeKeySpecifier)[];
export type UserConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | UserConnectionPageInfoKeySpecifier)[];
export type UserConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserRoleKeySpecifier = ('capabilities' | 'displayName' | 'id' | 'isRestricted' | 'name' | UserRoleKeySpecifier)[];
export type UserRoleFieldPolicy = {
	capabilities?: FieldPolicy<any> | FieldReadFunction<any>,
	displayName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isRestricted?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserRoleConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | UserRoleConnectionKeySpecifier)[];
export type UserRoleConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserRoleConnectionEdgeKeySpecifier = ('cursor' | 'node' | UserRoleConnectionEdgeKeySpecifier)[];
export type UserRoleConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserRoleConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | UserRoleConnectionPageInfoKeySpecifier)[];
export type UserRoleConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToCommentConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | UserToCommentConnectionKeySpecifier)[];
export type UserToCommentConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToCommentConnectionEdgeKeySpecifier = ('cursor' | 'node' | UserToCommentConnectionEdgeKeySpecifier)[];
export type UserToCommentConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToCommentConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | UserToCommentConnectionPageInfoKeySpecifier)[];
export type UserToCommentConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToEnqueuedScriptConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | UserToEnqueuedScriptConnectionKeySpecifier)[];
export type UserToEnqueuedScriptConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToEnqueuedScriptConnectionEdgeKeySpecifier = ('cursor' | 'node' | UserToEnqueuedScriptConnectionEdgeKeySpecifier)[];
export type UserToEnqueuedScriptConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToEnqueuedScriptConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | UserToEnqueuedScriptConnectionPageInfoKeySpecifier)[];
export type UserToEnqueuedScriptConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToEnqueuedStylesheetConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | UserToEnqueuedStylesheetConnectionKeySpecifier)[];
export type UserToEnqueuedStylesheetConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToEnqueuedStylesheetConnectionEdgeKeySpecifier = ('cursor' | 'node' | UserToEnqueuedStylesheetConnectionEdgeKeySpecifier)[];
export type UserToEnqueuedStylesheetConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToEnqueuedStylesheetConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | UserToEnqueuedStylesheetConnectionPageInfoKeySpecifier)[];
export type UserToEnqueuedStylesheetConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToMediaItemConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | UserToMediaItemConnectionKeySpecifier)[];
export type UserToMediaItemConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToMediaItemConnectionEdgeKeySpecifier = ('cursor' | 'node' | UserToMediaItemConnectionEdgeKeySpecifier)[];
export type UserToMediaItemConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToMediaItemConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | UserToMediaItemConnectionPageInfoKeySpecifier)[];
export type UserToMediaItemConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToPageConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | UserToPageConnectionKeySpecifier)[];
export type UserToPageConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToPageConnectionEdgeKeySpecifier = ('cursor' | 'node' | UserToPageConnectionEdgeKeySpecifier)[];
export type UserToPageConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToPageConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | UserToPageConnectionPageInfoKeySpecifier)[];
export type UserToPageConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToPostConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | UserToPostConnectionKeySpecifier)[];
export type UserToPostConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToPostConnectionEdgeKeySpecifier = ('cursor' | 'node' | UserToPostConnectionEdgeKeySpecifier)[];
export type UserToPostConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToPostConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | UserToPostConnectionPageInfoKeySpecifier)[];
export type UserToPostConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToRevisionsConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | UserToRevisionsConnectionKeySpecifier)[];
export type UserToRevisionsConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToRevisionsConnectionEdgeKeySpecifier = ('cursor' | 'node' | UserToRevisionsConnectionEdgeKeySpecifier)[];
export type UserToRevisionsConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToRevisionsConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | UserToRevisionsConnectionPageInfoKeySpecifier)[];
export type UserToRevisionsConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToUserRoleConnectionKeySpecifier = ('edges' | 'nodes' | 'pageInfo' | UserToUserRoleConnectionKeySpecifier)[];
export type UserToUserRoleConnectionFieldPolicy = {
	edges?: FieldPolicy<any> | FieldReadFunction<any>,
	nodes?: FieldPolicy<any> | FieldReadFunction<any>,
	pageInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToUserRoleConnectionEdgeKeySpecifier = ('cursor' | 'node' | UserToUserRoleConnectionEdgeKeySpecifier)[];
export type UserToUserRoleConnectionEdgeFieldPolicy = {
	cursor?: FieldPolicy<any> | FieldReadFunction<any>,
	node?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserToUserRoleConnectionPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | UserToUserRoleConnectionPageInfoKeySpecifier)[];
export type UserToUserRoleConnectionPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WPPageInfoKeySpecifier = ('endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'seo' | 'startCursor' | WPPageInfoKeySpecifier)[];
export type WPPageInfoFieldPolicy = {
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	seo?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WritingSettingsKeySpecifier = ('defaultCategory' | 'defaultPostFormat' | 'useSmilies' | WritingSettingsKeySpecifier)[];
export type WritingSettingsFieldPolicy = {
	defaultCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	defaultPostFormat?: FieldPolicy<any> | FieldReadFunction<any>,
	useSmilies?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Avatar?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AvatarKeySpecifier | (() => undefined | AvatarKeySpecifier),
		fields?: AvatarFieldPolicy,
	},
	Category?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryKeySpecifier | (() => undefined | CategoryKeySpecifier),
		fields?: CategoryFieldPolicy,
	},
	CategoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryConnectionKeySpecifier | (() => undefined | CategoryConnectionKeySpecifier),
		fields?: CategoryConnectionFieldPolicy,
	},
	CategoryConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryConnectionEdgeKeySpecifier | (() => undefined | CategoryConnectionEdgeKeySpecifier),
		fields?: CategoryConnectionEdgeFieldPolicy,
	},
	CategoryConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryConnectionPageInfoKeySpecifier | (() => undefined | CategoryConnectionPageInfoKeySpecifier),
		fields?: CategoryConnectionPageInfoFieldPolicy,
	},
	CategoryToAncestorsCategoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToAncestorsCategoryConnectionKeySpecifier | (() => undefined | CategoryToAncestorsCategoryConnectionKeySpecifier),
		fields?: CategoryToAncestorsCategoryConnectionFieldPolicy,
	},
	CategoryToAncestorsCategoryConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToAncestorsCategoryConnectionEdgeKeySpecifier | (() => undefined | CategoryToAncestorsCategoryConnectionEdgeKeySpecifier),
		fields?: CategoryToAncestorsCategoryConnectionEdgeFieldPolicy,
	},
	CategoryToAncestorsCategoryConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToAncestorsCategoryConnectionPageInfoKeySpecifier | (() => undefined | CategoryToAncestorsCategoryConnectionPageInfoKeySpecifier),
		fields?: CategoryToAncestorsCategoryConnectionPageInfoFieldPolicy,
	},
	CategoryToCategoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToCategoryConnectionKeySpecifier | (() => undefined | CategoryToCategoryConnectionKeySpecifier),
		fields?: CategoryToCategoryConnectionFieldPolicy,
	},
	CategoryToCategoryConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToCategoryConnectionEdgeKeySpecifier | (() => undefined | CategoryToCategoryConnectionEdgeKeySpecifier),
		fields?: CategoryToCategoryConnectionEdgeFieldPolicy,
	},
	CategoryToCategoryConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToCategoryConnectionPageInfoKeySpecifier | (() => undefined | CategoryToCategoryConnectionPageInfoKeySpecifier),
		fields?: CategoryToCategoryConnectionPageInfoFieldPolicy,
	},
	CategoryToContentNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToContentNodeConnectionKeySpecifier | (() => undefined | CategoryToContentNodeConnectionKeySpecifier),
		fields?: CategoryToContentNodeConnectionFieldPolicy,
	},
	CategoryToContentNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToContentNodeConnectionEdgeKeySpecifier | (() => undefined | CategoryToContentNodeConnectionEdgeKeySpecifier),
		fields?: CategoryToContentNodeConnectionEdgeFieldPolicy,
	},
	CategoryToContentNodeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToContentNodeConnectionPageInfoKeySpecifier | (() => undefined | CategoryToContentNodeConnectionPageInfoKeySpecifier),
		fields?: CategoryToContentNodeConnectionPageInfoFieldPolicy,
	},
	CategoryToParentCategoryConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToParentCategoryConnectionEdgeKeySpecifier | (() => undefined | CategoryToParentCategoryConnectionEdgeKeySpecifier),
		fields?: CategoryToParentCategoryConnectionEdgeFieldPolicy,
	},
	CategoryToPostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToPostConnectionKeySpecifier | (() => undefined | CategoryToPostConnectionKeySpecifier),
		fields?: CategoryToPostConnectionFieldPolicy,
	},
	CategoryToPostConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToPostConnectionEdgeKeySpecifier | (() => undefined | CategoryToPostConnectionEdgeKeySpecifier),
		fields?: CategoryToPostConnectionEdgeFieldPolicy,
	},
	CategoryToPostConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToPostConnectionPageInfoKeySpecifier | (() => undefined | CategoryToPostConnectionPageInfoKeySpecifier),
		fields?: CategoryToPostConnectionPageInfoFieldPolicy,
	},
	CategoryToTaxonomyConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CategoryToTaxonomyConnectionEdgeKeySpecifier | (() => undefined | CategoryToTaxonomyConnectionEdgeKeySpecifier),
		fields?: CategoryToTaxonomyConnectionEdgeFieldPolicy,
	},
	Comment?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentKeySpecifier | (() => undefined | CommentKeySpecifier),
		fields?: CommentFieldPolicy,
	},
	CommentAuthor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentAuthorKeySpecifier | (() => undefined | CommentAuthorKeySpecifier),
		fields?: CommentAuthorFieldPolicy,
	},
	CommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentConnectionKeySpecifier | (() => undefined | CommentConnectionKeySpecifier),
		fields?: CommentConnectionFieldPolicy,
	},
	CommentConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentConnectionEdgeKeySpecifier | (() => undefined | CommentConnectionEdgeKeySpecifier),
		fields?: CommentConnectionEdgeFieldPolicy,
	},
	CommentConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentConnectionPageInfoKeySpecifier | (() => undefined | CommentConnectionPageInfoKeySpecifier),
		fields?: CommentConnectionPageInfoFieldPolicy,
	},
	CommentToCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentToCommentConnectionKeySpecifier | (() => undefined | CommentToCommentConnectionKeySpecifier),
		fields?: CommentToCommentConnectionFieldPolicy,
	},
	CommentToCommentConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentToCommentConnectionEdgeKeySpecifier | (() => undefined | CommentToCommentConnectionEdgeKeySpecifier),
		fields?: CommentToCommentConnectionEdgeFieldPolicy,
	},
	CommentToCommentConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentToCommentConnectionPageInfoKeySpecifier | (() => undefined | CommentToCommentConnectionPageInfoKeySpecifier),
		fields?: CommentToCommentConnectionPageInfoFieldPolicy,
	},
	CommentToCommenterConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentToCommenterConnectionEdgeKeySpecifier | (() => undefined | CommentToCommenterConnectionEdgeKeySpecifier),
		fields?: CommentToCommenterConnectionEdgeFieldPolicy,
	},
	CommentToContentNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentToContentNodeConnectionEdgeKeySpecifier | (() => undefined | CommentToContentNodeConnectionEdgeKeySpecifier),
		fields?: CommentToContentNodeConnectionEdgeFieldPolicy,
	},
	CommentToParentCommentConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommentToParentCommentConnectionEdgeKeySpecifier | (() => undefined | CommentToParentCommentConnectionEdgeKeySpecifier),
		fields?: CommentToParentCommentConnectionEdgeFieldPolicy,
	},
	Commenter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommenterKeySpecifier | (() => undefined | CommenterKeySpecifier),
		fields?: CommenterFieldPolicy,
	},
	CommenterConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommenterConnectionEdgeKeySpecifier | (() => undefined | CommenterConnectionEdgeKeySpecifier),
		fields?: CommenterConnectionEdgeFieldPolicy,
	},
	Connection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ConnectionKeySpecifier | (() => undefined | ConnectionKeySpecifier),
		fields?: ConnectionFieldPolicy,
	},
	ContentNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeKeySpecifier | (() => undefined | ContentNodeKeySpecifier),
		fields?: ContentNodeFieldPolicy,
	},
	ContentNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeConnectionKeySpecifier | (() => undefined | ContentNodeConnectionKeySpecifier),
		fields?: ContentNodeConnectionFieldPolicy,
	},
	ContentNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeConnectionEdgeKeySpecifier | (() => undefined | ContentNodeConnectionEdgeKeySpecifier),
		fields?: ContentNodeConnectionEdgeFieldPolicy,
	},
	ContentNodeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeConnectionPageInfoKeySpecifier | (() => undefined | ContentNodeConnectionPageInfoKeySpecifier),
		fields?: ContentNodeConnectionPageInfoFieldPolicy,
	},
	ContentNodeToContentTypeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeToContentTypeConnectionEdgeKeySpecifier | (() => undefined | ContentNodeToContentTypeConnectionEdgeKeySpecifier),
		fields?: ContentNodeToContentTypeConnectionEdgeFieldPolicy,
	},
	ContentNodeToEditLastConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeToEditLastConnectionEdgeKeySpecifier | (() => undefined | ContentNodeToEditLastConnectionEdgeKeySpecifier),
		fields?: ContentNodeToEditLastConnectionEdgeFieldPolicy,
	},
	ContentNodeToEditLockConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeToEditLockConnectionEdgeKeySpecifier | (() => undefined | ContentNodeToEditLockConnectionEdgeKeySpecifier),
		fields?: ContentNodeToEditLockConnectionEdgeFieldPolicy,
	},
	ContentNodeToEnqueuedScriptConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeToEnqueuedScriptConnectionKeySpecifier | (() => undefined | ContentNodeToEnqueuedScriptConnectionKeySpecifier),
		fields?: ContentNodeToEnqueuedScriptConnectionFieldPolicy,
	},
	ContentNodeToEnqueuedScriptConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeToEnqueuedScriptConnectionEdgeKeySpecifier | (() => undefined | ContentNodeToEnqueuedScriptConnectionEdgeKeySpecifier),
		fields?: ContentNodeToEnqueuedScriptConnectionEdgeFieldPolicy,
	},
	ContentNodeToEnqueuedScriptConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeToEnqueuedScriptConnectionPageInfoKeySpecifier | (() => undefined | ContentNodeToEnqueuedScriptConnectionPageInfoKeySpecifier),
		fields?: ContentNodeToEnqueuedScriptConnectionPageInfoFieldPolicy,
	},
	ContentNodeToEnqueuedStylesheetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeToEnqueuedStylesheetConnectionKeySpecifier | (() => undefined | ContentNodeToEnqueuedStylesheetConnectionKeySpecifier),
		fields?: ContentNodeToEnqueuedStylesheetConnectionFieldPolicy,
	},
	ContentNodeToEnqueuedStylesheetConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier | (() => undefined | ContentNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier),
		fields?: ContentNodeToEnqueuedStylesheetConnectionEdgeFieldPolicy,
	},
	ContentNodeToEnqueuedStylesheetConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeToEnqueuedStylesheetConnectionPageInfoKeySpecifier | (() => undefined | ContentNodeToEnqueuedStylesheetConnectionPageInfoKeySpecifier),
		fields?: ContentNodeToEnqueuedStylesheetConnectionPageInfoFieldPolicy,
	},
	ContentNodeToMediaItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeToMediaItemConnectionKeySpecifier | (() => undefined | ContentNodeToMediaItemConnectionKeySpecifier),
		fields?: ContentNodeToMediaItemConnectionFieldPolicy,
	},
	ContentNodeToMediaItemConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeToMediaItemConnectionEdgeKeySpecifier | (() => undefined | ContentNodeToMediaItemConnectionEdgeKeySpecifier),
		fields?: ContentNodeToMediaItemConnectionEdgeFieldPolicy,
	},
	ContentNodeToMediaItemConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentNodeToMediaItemConnectionPageInfoKeySpecifier | (() => undefined | ContentNodeToMediaItemConnectionPageInfoKeySpecifier),
		fields?: ContentNodeToMediaItemConnectionPageInfoFieldPolicy,
	},
	ContentTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentTemplateKeySpecifier | (() => undefined | ContentTemplateKeySpecifier),
		fields?: ContentTemplateFieldPolicy,
	},
	ContentType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentTypeKeySpecifier | (() => undefined | ContentTypeKeySpecifier),
		fields?: ContentTypeFieldPolicy,
	},
	ContentTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentTypeConnectionKeySpecifier | (() => undefined | ContentTypeConnectionKeySpecifier),
		fields?: ContentTypeConnectionFieldPolicy,
	},
	ContentTypeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentTypeConnectionEdgeKeySpecifier | (() => undefined | ContentTypeConnectionEdgeKeySpecifier),
		fields?: ContentTypeConnectionEdgeFieldPolicy,
	},
	ContentTypeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentTypeConnectionPageInfoKeySpecifier | (() => undefined | ContentTypeConnectionPageInfoKeySpecifier),
		fields?: ContentTypeConnectionPageInfoFieldPolicy,
	},
	ContentTypeToContentNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentTypeToContentNodeConnectionKeySpecifier | (() => undefined | ContentTypeToContentNodeConnectionKeySpecifier),
		fields?: ContentTypeToContentNodeConnectionFieldPolicy,
	},
	ContentTypeToContentNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentTypeToContentNodeConnectionEdgeKeySpecifier | (() => undefined | ContentTypeToContentNodeConnectionEdgeKeySpecifier),
		fields?: ContentTypeToContentNodeConnectionEdgeFieldPolicy,
	},
	ContentTypeToContentNodeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentTypeToContentNodeConnectionPageInfoKeySpecifier | (() => undefined | ContentTypeToContentNodeConnectionPageInfoKeySpecifier),
		fields?: ContentTypeToContentNodeConnectionPageInfoFieldPolicy,
	},
	ContentTypeToTaxonomyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentTypeToTaxonomyConnectionKeySpecifier | (() => undefined | ContentTypeToTaxonomyConnectionKeySpecifier),
		fields?: ContentTypeToTaxonomyConnectionFieldPolicy,
	},
	ContentTypeToTaxonomyConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentTypeToTaxonomyConnectionEdgeKeySpecifier | (() => undefined | ContentTypeToTaxonomyConnectionEdgeKeySpecifier),
		fields?: ContentTypeToTaxonomyConnectionEdgeFieldPolicy,
	},
	ContentTypeToTaxonomyConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ContentTypeToTaxonomyConnectionPageInfoKeySpecifier | (() => undefined | ContentTypeToTaxonomyConnectionPageInfoKeySpecifier),
		fields?: ContentTypeToTaxonomyConnectionPageInfoFieldPolicy,
	},
	CreateCategoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCategoryPayloadKeySpecifier | (() => undefined | CreateCategoryPayloadKeySpecifier),
		fields?: CreateCategoryPayloadFieldPolicy,
	},
	CreateCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateCommentPayloadKeySpecifier | (() => undefined | CreateCommentPayloadKeySpecifier),
		fields?: CreateCommentPayloadFieldPolicy,
	},
	CreateMediaItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateMediaItemPayloadKeySpecifier | (() => undefined | CreateMediaItemPayloadKeySpecifier),
		fields?: CreateMediaItemPayloadFieldPolicy,
	},
	CreatePagePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePagePayloadKeySpecifier | (() => undefined | CreatePagePayloadKeySpecifier),
		fields?: CreatePagePayloadFieldPolicy,
	},
	CreatePostFormatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePostFormatPayloadKeySpecifier | (() => undefined | CreatePostFormatPayloadKeySpecifier),
		fields?: CreatePostFormatPayloadFieldPolicy,
	},
	CreatePostPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreatePostPayloadKeySpecifier | (() => undefined | CreatePostPayloadKeySpecifier),
		fields?: CreatePostPayloadFieldPolicy,
	},
	CreateTagPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateTagPayloadKeySpecifier | (() => undefined | CreateTagPayloadKeySpecifier),
		fields?: CreateTagPayloadFieldPolicy,
	},
	CreateUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CreateUserPayloadKeySpecifier | (() => undefined | CreateUserPayloadKeySpecifier),
		fields?: CreateUserPayloadFieldPolicy,
	},
	CustomTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CustomTemplateKeySpecifier | (() => undefined | CustomTemplateKeySpecifier),
		fields?: CustomTemplateFieldPolicy,
	},
	DatabaseIdentifier?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DatabaseIdentifierKeySpecifier | (() => undefined | DatabaseIdentifierKeySpecifier),
		fields?: DatabaseIdentifierFieldPolicy,
	},
	DefaultTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DefaultTemplateKeySpecifier | (() => undefined | DefaultTemplateKeySpecifier),
		fields?: DefaultTemplateFieldPolicy,
	},
	DeleteCategoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteCategoryPayloadKeySpecifier | (() => undefined | DeleteCategoryPayloadKeySpecifier),
		fields?: DeleteCategoryPayloadFieldPolicy,
	},
	DeleteCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteCommentPayloadKeySpecifier | (() => undefined | DeleteCommentPayloadKeySpecifier),
		fields?: DeleteCommentPayloadFieldPolicy,
	},
	DeleteMediaItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteMediaItemPayloadKeySpecifier | (() => undefined | DeleteMediaItemPayloadKeySpecifier),
		fields?: DeleteMediaItemPayloadFieldPolicy,
	},
	DeletePagePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePagePayloadKeySpecifier | (() => undefined | DeletePagePayloadKeySpecifier),
		fields?: DeletePagePayloadFieldPolicy,
	},
	DeletePostFormatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePostFormatPayloadKeySpecifier | (() => undefined | DeletePostFormatPayloadKeySpecifier),
		fields?: DeletePostFormatPayloadFieldPolicy,
	},
	DeletePostPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeletePostPayloadKeySpecifier | (() => undefined | DeletePostPayloadKeySpecifier),
		fields?: DeletePostPayloadFieldPolicy,
	},
	DeleteTagPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteTagPayloadKeySpecifier | (() => undefined | DeleteTagPayloadKeySpecifier),
		fields?: DeleteTagPayloadFieldPolicy,
	},
	DeleteUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DeleteUserPayloadKeySpecifier | (() => undefined | DeleteUserPayloadKeySpecifier),
		fields?: DeleteUserPayloadFieldPolicy,
	},
	DiscussionSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DiscussionSettingsKeySpecifier | (() => undefined | DiscussionSettingsKeySpecifier),
		fields?: DiscussionSettingsFieldPolicy,
	},
	Edge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EdgeKeySpecifier | (() => undefined | EdgeKeySpecifier),
		fields?: EdgeFieldPolicy,
	},
	EnqueuedAsset?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnqueuedAssetKeySpecifier | (() => undefined | EnqueuedAssetKeySpecifier),
		fields?: EnqueuedAssetFieldPolicy,
	},
	EnqueuedScript?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnqueuedScriptKeySpecifier | (() => undefined | EnqueuedScriptKeySpecifier),
		fields?: EnqueuedScriptFieldPolicy,
	},
	EnqueuedScriptConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnqueuedScriptConnectionKeySpecifier | (() => undefined | EnqueuedScriptConnectionKeySpecifier),
		fields?: EnqueuedScriptConnectionFieldPolicy,
	},
	EnqueuedScriptConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnqueuedScriptConnectionEdgeKeySpecifier | (() => undefined | EnqueuedScriptConnectionEdgeKeySpecifier),
		fields?: EnqueuedScriptConnectionEdgeFieldPolicy,
	},
	EnqueuedScriptConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnqueuedScriptConnectionPageInfoKeySpecifier | (() => undefined | EnqueuedScriptConnectionPageInfoKeySpecifier),
		fields?: EnqueuedScriptConnectionPageInfoFieldPolicy,
	},
	EnqueuedStylesheet?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnqueuedStylesheetKeySpecifier | (() => undefined | EnqueuedStylesheetKeySpecifier),
		fields?: EnqueuedStylesheetFieldPolicy,
	},
	EnqueuedStylesheetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnqueuedStylesheetConnectionKeySpecifier | (() => undefined | EnqueuedStylesheetConnectionKeySpecifier),
		fields?: EnqueuedStylesheetConnectionFieldPolicy,
	},
	EnqueuedStylesheetConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnqueuedStylesheetConnectionEdgeKeySpecifier | (() => undefined | EnqueuedStylesheetConnectionEdgeKeySpecifier),
		fields?: EnqueuedStylesheetConnectionEdgeFieldPolicy,
	},
	EnqueuedStylesheetConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EnqueuedStylesheetConnectionPageInfoKeySpecifier | (() => undefined | EnqueuedStylesheetConnectionPageInfoKeySpecifier),
		fields?: EnqueuedStylesheetConnectionPageInfoFieldPolicy,
	},
	FullwidthTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FullwidthTemplateKeySpecifier | (() => undefined | FullwidthTemplateKeySpecifier),
		fields?: FullwidthTemplateFieldPolicy,
	},
	GeneralSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GeneralSettingsKeySpecifier | (() => undefined | GeneralSettingsKeySpecifier),
		fields?: GeneralSettingsFieldPolicy,
	},
	HierarchicalContentNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HierarchicalContentNodeKeySpecifier | (() => undefined | HierarchicalContentNodeKeySpecifier),
		fields?: HierarchicalContentNodeFieldPolicy,
	},
	HierarchicalContentNodeToContentNodeAncestorsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HierarchicalContentNodeToContentNodeAncestorsConnectionKeySpecifier | (() => undefined | HierarchicalContentNodeToContentNodeAncestorsConnectionKeySpecifier),
		fields?: HierarchicalContentNodeToContentNodeAncestorsConnectionFieldPolicy,
	},
	HierarchicalContentNodeToContentNodeAncestorsConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeKeySpecifier | (() => undefined | HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeKeySpecifier),
		fields?: HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeFieldPolicy,
	},
	HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoKeySpecifier | (() => undefined | HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoKeySpecifier),
		fields?: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoFieldPolicy,
	},
	HierarchicalContentNodeToContentNodeChildrenConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HierarchicalContentNodeToContentNodeChildrenConnectionKeySpecifier | (() => undefined | HierarchicalContentNodeToContentNodeChildrenConnectionKeySpecifier),
		fields?: HierarchicalContentNodeToContentNodeChildrenConnectionFieldPolicy,
	},
	HierarchicalContentNodeToContentNodeChildrenConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HierarchicalContentNodeToContentNodeChildrenConnectionEdgeKeySpecifier | (() => undefined | HierarchicalContentNodeToContentNodeChildrenConnectionEdgeKeySpecifier),
		fields?: HierarchicalContentNodeToContentNodeChildrenConnectionEdgeFieldPolicy,
	},
	HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoKeySpecifier | (() => undefined | HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoKeySpecifier),
		fields?: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoFieldPolicy,
	},
	HierarchicalContentNodeToParentContentNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HierarchicalContentNodeToParentContentNodeConnectionEdgeKeySpecifier | (() => undefined | HierarchicalContentNodeToParentContentNodeConnectionEdgeKeySpecifier),
		fields?: HierarchicalContentNodeToParentContentNodeConnectionEdgeFieldPolicy,
	},
	HierarchicalNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HierarchicalNodeKeySpecifier | (() => undefined | HierarchicalNodeKeySpecifier),
		fields?: HierarchicalNodeFieldPolicy,
	},
	HierarchicalTermNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | HierarchicalTermNodeKeySpecifier | (() => undefined | HierarchicalTermNodeKeySpecifier),
		fields?: HierarchicalTermNodeFieldPolicy,
	},
	LoginPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LoginPayloadKeySpecifier | (() => undefined | LoginPayloadKeySpecifier),
		fields?: LoginPayloadFieldPolicy,
	},
	MediaDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaDetailsKeySpecifier | (() => undefined | MediaDetailsKeySpecifier),
		fields?: MediaDetailsFieldPolicy,
	},
	MediaItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaItemKeySpecifier | (() => undefined | MediaItemKeySpecifier),
		fields?: MediaItemFieldPolicy,
	},
	MediaItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaItemConnectionKeySpecifier | (() => undefined | MediaItemConnectionKeySpecifier),
		fields?: MediaItemConnectionFieldPolicy,
	},
	MediaItemConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaItemConnectionEdgeKeySpecifier | (() => undefined | MediaItemConnectionEdgeKeySpecifier),
		fields?: MediaItemConnectionEdgeFieldPolicy,
	},
	MediaItemConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaItemConnectionPageInfoKeySpecifier | (() => undefined | MediaItemConnectionPageInfoKeySpecifier),
		fields?: MediaItemConnectionPageInfoFieldPolicy,
	},
	MediaItemMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaItemMetaKeySpecifier | (() => undefined | MediaItemMetaKeySpecifier),
		fields?: MediaItemMetaFieldPolicy,
	},
	MediaItemToCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaItemToCommentConnectionKeySpecifier | (() => undefined | MediaItemToCommentConnectionKeySpecifier),
		fields?: MediaItemToCommentConnectionFieldPolicy,
	},
	MediaItemToCommentConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaItemToCommentConnectionEdgeKeySpecifier | (() => undefined | MediaItemToCommentConnectionEdgeKeySpecifier),
		fields?: MediaItemToCommentConnectionEdgeFieldPolicy,
	},
	MediaItemToCommentConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaItemToCommentConnectionPageInfoKeySpecifier | (() => undefined | MediaItemToCommentConnectionPageInfoKeySpecifier),
		fields?: MediaItemToCommentConnectionPageInfoFieldPolicy,
	},
	MediaSize?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MediaSizeKeySpecifier | (() => undefined | MediaSizeKeySpecifier),
		fields?: MediaSizeFieldPolicy,
	},
	Menu?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuKeySpecifier | (() => undefined | MenuKeySpecifier),
		fields?: MenuFieldPolicy,
	},
	MenuConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuConnectionKeySpecifier | (() => undefined | MenuConnectionKeySpecifier),
		fields?: MenuConnectionFieldPolicy,
	},
	MenuConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuConnectionEdgeKeySpecifier | (() => undefined | MenuConnectionEdgeKeySpecifier),
		fields?: MenuConnectionEdgeFieldPolicy,
	},
	MenuConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuConnectionPageInfoKeySpecifier | (() => undefined | MenuConnectionPageInfoKeySpecifier),
		fields?: MenuConnectionPageInfoFieldPolicy,
	},
	MenuItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemKeySpecifier | (() => undefined | MenuItemKeySpecifier),
		fields?: MenuItemFieldPolicy,
	},
	MenuItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemConnectionKeySpecifier | (() => undefined | MenuItemConnectionKeySpecifier),
		fields?: MenuItemConnectionFieldPolicy,
	},
	MenuItemConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemConnectionEdgeKeySpecifier | (() => undefined | MenuItemConnectionEdgeKeySpecifier),
		fields?: MenuItemConnectionEdgeFieldPolicy,
	},
	MenuItemConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemConnectionPageInfoKeySpecifier | (() => undefined | MenuItemConnectionPageInfoKeySpecifier),
		fields?: MenuItemConnectionPageInfoFieldPolicy,
	},
	MenuItemLinkable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemLinkableKeySpecifier | (() => undefined | MenuItemLinkableKeySpecifier),
		fields?: MenuItemLinkableFieldPolicy,
	},
	MenuItemLinkableConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemLinkableConnectionEdgeKeySpecifier | (() => undefined | MenuItemLinkableConnectionEdgeKeySpecifier),
		fields?: MenuItemLinkableConnectionEdgeFieldPolicy,
	},
	MenuItemToMenuConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemToMenuConnectionEdgeKeySpecifier | (() => undefined | MenuItemToMenuConnectionEdgeKeySpecifier),
		fields?: MenuItemToMenuConnectionEdgeFieldPolicy,
	},
	MenuItemToMenuItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemToMenuItemConnectionKeySpecifier | (() => undefined | MenuItemToMenuItemConnectionKeySpecifier),
		fields?: MenuItemToMenuItemConnectionFieldPolicy,
	},
	MenuItemToMenuItemConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemToMenuItemConnectionEdgeKeySpecifier | (() => undefined | MenuItemToMenuItemConnectionEdgeKeySpecifier),
		fields?: MenuItemToMenuItemConnectionEdgeFieldPolicy,
	},
	MenuItemToMenuItemConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemToMenuItemConnectionPageInfoKeySpecifier | (() => undefined | MenuItemToMenuItemConnectionPageInfoKeySpecifier),
		fields?: MenuItemToMenuItemConnectionPageInfoFieldPolicy,
	},
	MenuItemToMenuItemLinkableConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuItemToMenuItemLinkableConnectionEdgeKeySpecifier | (() => undefined | MenuItemToMenuItemLinkableConnectionEdgeKeySpecifier),
		fields?: MenuItemToMenuItemLinkableConnectionEdgeFieldPolicy,
	},
	MenuToMenuItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuToMenuItemConnectionKeySpecifier | (() => undefined | MenuToMenuItemConnectionKeySpecifier),
		fields?: MenuToMenuItemConnectionFieldPolicy,
	},
	MenuToMenuItemConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuToMenuItemConnectionEdgeKeySpecifier | (() => undefined | MenuToMenuItemConnectionEdgeKeySpecifier),
		fields?: MenuToMenuItemConnectionEdgeFieldPolicy,
	},
	MenuToMenuItemConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MenuToMenuItemConnectionPageInfoKeySpecifier | (() => undefined | MenuToMenuItemConnectionPageInfoKeySpecifier),
		fields?: MenuToMenuItemConnectionPageInfoFieldPolicy,
	},
	MolonguiAuthor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MolonguiAuthorKeySpecifier | (() => undefined | MolonguiAuthorKeySpecifier),
		fields?: MolonguiAuthorFieldPolicy,
	},
	Node?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeKeySpecifier | (() => undefined | NodeKeySpecifier),
		fields?: NodeFieldPolicy,
	},
	NodeWithAuthor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithAuthorKeySpecifier | (() => undefined | NodeWithAuthorKeySpecifier),
		fields?: NodeWithAuthorFieldPolicy,
	},
	NodeWithAuthorToUserConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithAuthorToUserConnectionEdgeKeySpecifier | (() => undefined | NodeWithAuthorToUserConnectionEdgeKeySpecifier),
		fields?: NodeWithAuthorToUserConnectionEdgeFieldPolicy,
	},
	NodeWithComments?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithCommentsKeySpecifier | (() => undefined | NodeWithCommentsKeySpecifier),
		fields?: NodeWithCommentsFieldPolicy,
	},
	NodeWithContentEditor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithContentEditorKeySpecifier | (() => undefined | NodeWithContentEditorKeySpecifier),
		fields?: NodeWithContentEditorFieldPolicy,
	},
	NodeWithExcerpt?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithExcerptKeySpecifier | (() => undefined | NodeWithExcerptKeySpecifier),
		fields?: NodeWithExcerptFieldPolicy,
	},
	NodeWithFeaturedImage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithFeaturedImageKeySpecifier | (() => undefined | NodeWithFeaturedImageKeySpecifier),
		fields?: NodeWithFeaturedImageFieldPolicy,
	},
	NodeWithFeaturedImageToMediaItemConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithFeaturedImageToMediaItemConnectionEdgeKeySpecifier | (() => undefined | NodeWithFeaturedImageToMediaItemConnectionEdgeKeySpecifier),
		fields?: NodeWithFeaturedImageToMediaItemConnectionEdgeFieldPolicy,
	},
	NodeWithPageAttributes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithPageAttributesKeySpecifier | (() => undefined | NodeWithPageAttributesKeySpecifier),
		fields?: NodeWithPageAttributesFieldPolicy,
	},
	NodeWithRevisions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithRevisionsKeySpecifier | (() => undefined | NodeWithRevisionsKeySpecifier),
		fields?: NodeWithRevisionsFieldPolicy,
	},
	NodeWithRevisionsToContentNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithRevisionsToContentNodeConnectionEdgeKeySpecifier | (() => undefined | NodeWithRevisionsToContentNodeConnectionEdgeKeySpecifier),
		fields?: NodeWithRevisionsToContentNodeConnectionEdgeFieldPolicy,
	},
	NodeWithTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithTemplateKeySpecifier | (() => undefined | NodeWithTemplateKeySpecifier),
		fields?: NodeWithTemplateFieldPolicy,
	},
	NodeWithTitle?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithTitleKeySpecifier | (() => undefined | NodeWithTitleKeySpecifier),
		fields?: NodeWithTitleFieldPolicy,
	},
	NodeWithTrackbacks?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | NodeWithTrackbacksKeySpecifier | (() => undefined | NodeWithTrackbacksKeySpecifier),
		fields?: NodeWithTrackbacksFieldPolicy,
	},
	OneToOneConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OneToOneConnectionKeySpecifier | (() => undefined | OneToOneConnectionKeySpecifier),
		fields?: OneToOneConnectionFieldPolicy,
	},
	Page?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageKeySpecifier | (() => undefined | PageKeySpecifier),
		fields?: PageFieldPolicy,
	},
	PageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageConnectionKeySpecifier | (() => undefined | PageConnectionKeySpecifier),
		fields?: PageConnectionFieldPolicy,
	},
	PageConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageConnectionEdgeKeySpecifier | (() => undefined | PageConnectionEdgeKeySpecifier),
		fields?: PageConnectionEdgeFieldPolicy,
	},
	PageConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageConnectionPageInfoKeySpecifier | (() => undefined | PageConnectionPageInfoKeySpecifier),
		fields?: PageConnectionPageInfoFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PageToCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageToCommentConnectionKeySpecifier | (() => undefined | PageToCommentConnectionKeySpecifier),
		fields?: PageToCommentConnectionFieldPolicy,
	},
	PageToCommentConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageToCommentConnectionEdgeKeySpecifier | (() => undefined | PageToCommentConnectionEdgeKeySpecifier),
		fields?: PageToCommentConnectionEdgeFieldPolicy,
	},
	PageToCommentConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageToCommentConnectionPageInfoKeySpecifier | (() => undefined | PageToCommentConnectionPageInfoKeySpecifier),
		fields?: PageToCommentConnectionPageInfoFieldPolicy,
	},
	PageToPreviewConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageToPreviewConnectionEdgeKeySpecifier | (() => undefined | PageToPreviewConnectionEdgeKeySpecifier),
		fields?: PageToPreviewConnectionEdgeFieldPolicy,
	},
	PageToRevisionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageToRevisionConnectionKeySpecifier | (() => undefined | PageToRevisionConnectionKeySpecifier),
		fields?: PageToRevisionConnectionFieldPolicy,
	},
	PageToRevisionConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageToRevisionConnectionEdgeKeySpecifier | (() => undefined | PageToRevisionConnectionEdgeKeySpecifier),
		fields?: PageToRevisionConnectionEdgeFieldPolicy,
	},
	PageToRevisionConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageToRevisionConnectionPageInfoKeySpecifier | (() => undefined | PageToRevisionConnectionPageInfoKeySpecifier),
		fields?: PageToRevisionConnectionPageInfoFieldPolicy,
	},
	Plugin?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginKeySpecifier | (() => undefined | PluginKeySpecifier),
		fields?: PluginFieldPolicy,
	},
	PluginConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginConnectionKeySpecifier | (() => undefined | PluginConnectionKeySpecifier),
		fields?: PluginConnectionFieldPolicy,
	},
	PluginConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginConnectionEdgeKeySpecifier | (() => undefined | PluginConnectionEdgeKeySpecifier),
		fields?: PluginConnectionEdgeFieldPolicy,
	},
	PluginConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PluginConnectionPageInfoKeySpecifier | (() => undefined | PluginConnectionPageInfoKeySpecifier),
		fields?: PluginConnectionPageInfoFieldPolicy,
	},
	Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		fields?: PostFieldPolicy,
	},
	PostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostConnectionKeySpecifier | (() => undefined | PostConnectionKeySpecifier),
		fields?: PostConnectionFieldPolicy,
	},
	PostConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostConnectionEdgeKeySpecifier | (() => undefined | PostConnectionEdgeKeySpecifier),
		fields?: PostConnectionEdgeFieldPolicy,
	},
	PostConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostConnectionPageInfoKeySpecifier | (() => undefined | PostConnectionPageInfoKeySpecifier),
		fields?: PostConnectionPageInfoFieldPolicy,
	},
	PostFormat?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostFormatKeySpecifier | (() => undefined | PostFormatKeySpecifier),
		fields?: PostFormatFieldPolicy,
	},
	PostFormatConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostFormatConnectionKeySpecifier | (() => undefined | PostFormatConnectionKeySpecifier),
		fields?: PostFormatConnectionFieldPolicy,
	},
	PostFormatConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostFormatConnectionEdgeKeySpecifier | (() => undefined | PostFormatConnectionEdgeKeySpecifier),
		fields?: PostFormatConnectionEdgeFieldPolicy,
	},
	PostFormatConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostFormatConnectionPageInfoKeySpecifier | (() => undefined | PostFormatConnectionPageInfoKeySpecifier),
		fields?: PostFormatConnectionPageInfoFieldPolicy,
	},
	PostFormatToContentNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostFormatToContentNodeConnectionKeySpecifier | (() => undefined | PostFormatToContentNodeConnectionKeySpecifier),
		fields?: PostFormatToContentNodeConnectionFieldPolicy,
	},
	PostFormatToContentNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostFormatToContentNodeConnectionEdgeKeySpecifier | (() => undefined | PostFormatToContentNodeConnectionEdgeKeySpecifier),
		fields?: PostFormatToContentNodeConnectionEdgeFieldPolicy,
	},
	PostFormatToContentNodeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostFormatToContentNodeConnectionPageInfoKeySpecifier | (() => undefined | PostFormatToContentNodeConnectionPageInfoKeySpecifier),
		fields?: PostFormatToContentNodeConnectionPageInfoFieldPolicy,
	},
	PostFormatToPostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostFormatToPostConnectionKeySpecifier | (() => undefined | PostFormatToPostConnectionKeySpecifier),
		fields?: PostFormatToPostConnectionFieldPolicy,
	},
	PostFormatToPostConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostFormatToPostConnectionEdgeKeySpecifier | (() => undefined | PostFormatToPostConnectionEdgeKeySpecifier),
		fields?: PostFormatToPostConnectionEdgeFieldPolicy,
	},
	PostFormatToPostConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostFormatToPostConnectionPageInfoKeySpecifier | (() => undefined | PostFormatToPostConnectionPageInfoKeySpecifier),
		fields?: PostFormatToPostConnectionPageInfoFieldPolicy,
	},
	PostFormatToTaxonomyConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostFormatToTaxonomyConnectionEdgeKeySpecifier | (() => undefined | PostFormatToTaxonomyConnectionEdgeKeySpecifier),
		fields?: PostFormatToTaxonomyConnectionEdgeFieldPolicy,
	},
	PostToCategoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToCategoryConnectionKeySpecifier | (() => undefined | PostToCategoryConnectionKeySpecifier),
		fields?: PostToCategoryConnectionFieldPolicy,
	},
	PostToCategoryConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToCategoryConnectionEdgeKeySpecifier | (() => undefined | PostToCategoryConnectionEdgeKeySpecifier),
		fields?: PostToCategoryConnectionEdgeFieldPolicy,
	},
	PostToCategoryConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToCategoryConnectionPageInfoKeySpecifier | (() => undefined | PostToCategoryConnectionPageInfoKeySpecifier),
		fields?: PostToCategoryConnectionPageInfoFieldPolicy,
	},
	PostToCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToCommentConnectionKeySpecifier | (() => undefined | PostToCommentConnectionKeySpecifier),
		fields?: PostToCommentConnectionFieldPolicy,
	},
	PostToCommentConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToCommentConnectionEdgeKeySpecifier | (() => undefined | PostToCommentConnectionEdgeKeySpecifier),
		fields?: PostToCommentConnectionEdgeFieldPolicy,
	},
	PostToCommentConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToCommentConnectionPageInfoKeySpecifier | (() => undefined | PostToCommentConnectionPageInfoKeySpecifier),
		fields?: PostToCommentConnectionPageInfoFieldPolicy,
	},
	PostToPostFormatConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToPostFormatConnectionKeySpecifier | (() => undefined | PostToPostFormatConnectionKeySpecifier),
		fields?: PostToPostFormatConnectionFieldPolicy,
	},
	PostToPostFormatConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToPostFormatConnectionEdgeKeySpecifier | (() => undefined | PostToPostFormatConnectionEdgeKeySpecifier),
		fields?: PostToPostFormatConnectionEdgeFieldPolicy,
	},
	PostToPostFormatConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToPostFormatConnectionPageInfoKeySpecifier | (() => undefined | PostToPostFormatConnectionPageInfoKeySpecifier),
		fields?: PostToPostFormatConnectionPageInfoFieldPolicy,
	},
	PostToPreviewConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToPreviewConnectionEdgeKeySpecifier | (() => undefined | PostToPreviewConnectionEdgeKeySpecifier),
		fields?: PostToPreviewConnectionEdgeFieldPolicy,
	},
	PostToRevisionConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToRevisionConnectionKeySpecifier | (() => undefined | PostToRevisionConnectionKeySpecifier),
		fields?: PostToRevisionConnectionFieldPolicy,
	},
	PostToRevisionConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToRevisionConnectionEdgeKeySpecifier | (() => undefined | PostToRevisionConnectionEdgeKeySpecifier),
		fields?: PostToRevisionConnectionEdgeFieldPolicy,
	},
	PostToRevisionConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToRevisionConnectionPageInfoKeySpecifier | (() => undefined | PostToRevisionConnectionPageInfoKeySpecifier),
		fields?: PostToRevisionConnectionPageInfoFieldPolicy,
	},
	PostToTagConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToTagConnectionKeySpecifier | (() => undefined | PostToTagConnectionKeySpecifier),
		fields?: PostToTagConnectionFieldPolicy,
	},
	PostToTagConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToTagConnectionEdgeKeySpecifier | (() => undefined | PostToTagConnectionEdgeKeySpecifier),
		fields?: PostToTagConnectionEdgeFieldPolicy,
	},
	PostToTagConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToTagConnectionPageInfoKeySpecifier | (() => undefined | PostToTagConnectionPageInfoKeySpecifier),
		fields?: PostToTagConnectionPageInfoFieldPolicy,
	},
	PostToTermNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToTermNodeConnectionKeySpecifier | (() => undefined | PostToTermNodeConnectionKeySpecifier),
		fields?: PostToTermNodeConnectionFieldPolicy,
	},
	PostToTermNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToTermNodeConnectionEdgeKeySpecifier | (() => undefined | PostToTermNodeConnectionEdgeKeySpecifier),
		fields?: PostToTermNodeConnectionEdgeFieldPolicy,
	},
	PostToTermNodeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostToTermNodeConnectionPageInfoKeySpecifier | (() => undefined | PostToTermNodeConnectionPageInfoKeySpecifier),
		fields?: PostToTermNodeConnectionPageInfoFieldPolicy,
	},
	PostTypeLabelDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostTypeLabelDetailsKeySpecifier | (() => undefined | PostTypeLabelDetailsKeySpecifier),
		fields?: PostTypeLabelDetailsFieldPolicy,
	},
	PostTypeSEO?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostTypeSEOKeySpecifier | (() => undefined | PostTypeSEOKeySpecifier),
		fields?: PostTypeSEOFieldPolicy,
	},
	Previewable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PreviewableKeySpecifier | (() => undefined | PreviewableKeySpecifier),
		fields?: PreviewableFieldPolicy,
	},
	ReadingSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ReadingSettingsKeySpecifier | (() => undefined | ReadingSettingsKeySpecifier),
		fields?: ReadingSettingsFieldPolicy,
	},
	RefreshJwtAuthTokenPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RefreshJwtAuthTokenPayloadKeySpecifier | (() => undefined | RefreshJwtAuthTokenPayloadKeySpecifier),
		fields?: RefreshJwtAuthTokenPayloadFieldPolicy,
	},
	RegisterUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegisterUserPayloadKeySpecifier | (() => undefined | RegisterUserPayloadKeySpecifier),
		fields?: RegisterUserPayloadFieldPolicy,
	},
	ResetUserPasswordPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ResetUserPasswordPayloadKeySpecifier | (() => undefined | ResetUserPasswordPayloadKeySpecifier),
		fields?: ResetUserPasswordPayloadFieldPolicy,
	},
	RestoreCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RestoreCommentPayloadKeySpecifier | (() => undefined | RestoreCommentPayloadKeySpecifier),
		fields?: RestoreCommentPayloadFieldPolicy,
	},
	RootMutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootMutationKeySpecifier | (() => undefined | RootMutationKeySpecifier),
		fields?: RootMutationFieldPolicy,
	},
	RootQuery?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryKeySpecifier | (() => undefined | RootQueryKeySpecifier),
		fields?: RootQueryFieldPolicy,
	},
	RootQueryToCategoryConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToCategoryConnectionKeySpecifier | (() => undefined | RootQueryToCategoryConnectionKeySpecifier),
		fields?: RootQueryToCategoryConnectionFieldPolicy,
	},
	RootQueryToCategoryConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToCategoryConnectionEdgeKeySpecifier | (() => undefined | RootQueryToCategoryConnectionEdgeKeySpecifier),
		fields?: RootQueryToCategoryConnectionEdgeFieldPolicy,
	},
	RootQueryToCategoryConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToCategoryConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToCategoryConnectionPageInfoKeySpecifier),
		fields?: RootQueryToCategoryConnectionPageInfoFieldPolicy,
	},
	RootQueryToCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToCommentConnectionKeySpecifier | (() => undefined | RootQueryToCommentConnectionKeySpecifier),
		fields?: RootQueryToCommentConnectionFieldPolicy,
	},
	RootQueryToCommentConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToCommentConnectionEdgeKeySpecifier | (() => undefined | RootQueryToCommentConnectionEdgeKeySpecifier),
		fields?: RootQueryToCommentConnectionEdgeFieldPolicy,
	},
	RootQueryToCommentConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToCommentConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToCommentConnectionPageInfoKeySpecifier),
		fields?: RootQueryToCommentConnectionPageInfoFieldPolicy,
	},
	RootQueryToContentNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToContentNodeConnectionKeySpecifier | (() => undefined | RootQueryToContentNodeConnectionKeySpecifier),
		fields?: RootQueryToContentNodeConnectionFieldPolicy,
	},
	RootQueryToContentNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToContentNodeConnectionEdgeKeySpecifier | (() => undefined | RootQueryToContentNodeConnectionEdgeKeySpecifier),
		fields?: RootQueryToContentNodeConnectionEdgeFieldPolicy,
	},
	RootQueryToContentNodeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToContentNodeConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToContentNodeConnectionPageInfoKeySpecifier),
		fields?: RootQueryToContentNodeConnectionPageInfoFieldPolicy,
	},
	RootQueryToContentTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToContentTypeConnectionKeySpecifier | (() => undefined | RootQueryToContentTypeConnectionKeySpecifier),
		fields?: RootQueryToContentTypeConnectionFieldPolicy,
	},
	RootQueryToContentTypeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToContentTypeConnectionEdgeKeySpecifier | (() => undefined | RootQueryToContentTypeConnectionEdgeKeySpecifier),
		fields?: RootQueryToContentTypeConnectionEdgeFieldPolicy,
	},
	RootQueryToContentTypeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToContentTypeConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToContentTypeConnectionPageInfoKeySpecifier),
		fields?: RootQueryToContentTypeConnectionPageInfoFieldPolicy,
	},
	RootQueryToEnqueuedScriptConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToEnqueuedScriptConnectionKeySpecifier | (() => undefined | RootQueryToEnqueuedScriptConnectionKeySpecifier),
		fields?: RootQueryToEnqueuedScriptConnectionFieldPolicy,
	},
	RootQueryToEnqueuedScriptConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToEnqueuedScriptConnectionEdgeKeySpecifier | (() => undefined | RootQueryToEnqueuedScriptConnectionEdgeKeySpecifier),
		fields?: RootQueryToEnqueuedScriptConnectionEdgeFieldPolicy,
	},
	RootQueryToEnqueuedScriptConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToEnqueuedScriptConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToEnqueuedScriptConnectionPageInfoKeySpecifier),
		fields?: RootQueryToEnqueuedScriptConnectionPageInfoFieldPolicy,
	},
	RootQueryToEnqueuedStylesheetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToEnqueuedStylesheetConnectionKeySpecifier | (() => undefined | RootQueryToEnqueuedStylesheetConnectionKeySpecifier),
		fields?: RootQueryToEnqueuedStylesheetConnectionFieldPolicy,
	},
	RootQueryToEnqueuedStylesheetConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToEnqueuedStylesheetConnectionEdgeKeySpecifier | (() => undefined | RootQueryToEnqueuedStylesheetConnectionEdgeKeySpecifier),
		fields?: RootQueryToEnqueuedStylesheetConnectionEdgeFieldPolicy,
	},
	RootQueryToEnqueuedStylesheetConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToEnqueuedStylesheetConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToEnqueuedStylesheetConnectionPageInfoKeySpecifier),
		fields?: RootQueryToEnqueuedStylesheetConnectionPageInfoFieldPolicy,
	},
	RootQueryToMediaItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToMediaItemConnectionKeySpecifier | (() => undefined | RootQueryToMediaItemConnectionKeySpecifier),
		fields?: RootQueryToMediaItemConnectionFieldPolicy,
	},
	RootQueryToMediaItemConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToMediaItemConnectionEdgeKeySpecifier | (() => undefined | RootQueryToMediaItemConnectionEdgeKeySpecifier),
		fields?: RootQueryToMediaItemConnectionEdgeFieldPolicy,
	},
	RootQueryToMediaItemConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToMediaItemConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToMediaItemConnectionPageInfoKeySpecifier),
		fields?: RootQueryToMediaItemConnectionPageInfoFieldPolicy,
	},
	RootQueryToMenuConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToMenuConnectionKeySpecifier | (() => undefined | RootQueryToMenuConnectionKeySpecifier),
		fields?: RootQueryToMenuConnectionFieldPolicy,
	},
	RootQueryToMenuConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToMenuConnectionEdgeKeySpecifier | (() => undefined | RootQueryToMenuConnectionEdgeKeySpecifier),
		fields?: RootQueryToMenuConnectionEdgeFieldPolicy,
	},
	RootQueryToMenuConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToMenuConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToMenuConnectionPageInfoKeySpecifier),
		fields?: RootQueryToMenuConnectionPageInfoFieldPolicy,
	},
	RootQueryToMenuItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToMenuItemConnectionKeySpecifier | (() => undefined | RootQueryToMenuItemConnectionKeySpecifier),
		fields?: RootQueryToMenuItemConnectionFieldPolicy,
	},
	RootQueryToMenuItemConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToMenuItemConnectionEdgeKeySpecifier | (() => undefined | RootQueryToMenuItemConnectionEdgeKeySpecifier),
		fields?: RootQueryToMenuItemConnectionEdgeFieldPolicy,
	},
	RootQueryToMenuItemConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToMenuItemConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToMenuItemConnectionPageInfoKeySpecifier),
		fields?: RootQueryToMenuItemConnectionPageInfoFieldPolicy,
	},
	RootQueryToPageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToPageConnectionKeySpecifier | (() => undefined | RootQueryToPageConnectionKeySpecifier),
		fields?: RootQueryToPageConnectionFieldPolicy,
	},
	RootQueryToPageConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToPageConnectionEdgeKeySpecifier | (() => undefined | RootQueryToPageConnectionEdgeKeySpecifier),
		fields?: RootQueryToPageConnectionEdgeFieldPolicy,
	},
	RootQueryToPageConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToPageConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToPageConnectionPageInfoKeySpecifier),
		fields?: RootQueryToPageConnectionPageInfoFieldPolicy,
	},
	RootQueryToPluginConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToPluginConnectionKeySpecifier | (() => undefined | RootQueryToPluginConnectionKeySpecifier),
		fields?: RootQueryToPluginConnectionFieldPolicy,
	},
	RootQueryToPluginConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToPluginConnectionEdgeKeySpecifier | (() => undefined | RootQueryToPluginConnectionEdgeKeySpecifier),
		fields?: RootQueryToPluginConnectionEdgeFieldPolicy,
	},
	RootQueryToPluginConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToPluginConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToPluginConnectionPageInfoKeySpecifier),
		fields?: RootQueryToPluginConnectionPageInfoFieldPolicy,
	},
	RootQueryToPostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToPostConnectionKeySpecifier | (() => undefined | RootQueryToPostConnectionKeySpecifier),
		fields?: RootQueryToPostConnectionFieldPolicy,
	},
	RootQueryToPostConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToPostConnectionEdgeKeySpecifier | (() => undefined | RootQueryToPostConnectionEdgeKeySpecifier),
		fields?: RootQueryToPostConnectionEdgeFieldPolicy,
	},
	RootQueryToPostConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToPostConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToPostConnectionPageInfoKeySpecifier),
		fields?: RootQueryToPostConnectionPageInfoFieldPolicy,
	},
	RootQueryToPostFormatConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToPostFormatConnectionKeySpecifier | (() => undefined | RootQueryToPostFormatConnectionKeySpecifier),
		fields?: RootQueryToPostFormatConnectionFieldPolicy,
	},
	RootQueryToPostFormatConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToPostFormatConnectionEdgeKeySpecifier | (() => undefined | RootQueryToPostFormatConnectionEdgeKeySpecifier),
		fields?: RootQueryToPostFormatConnectionEdgeFieldPolicy,
	},
	RootQueryToPostFormatConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToPostFormatConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToPostFormatConnectionPageInfoKeySpecifier),
		fields?: RootQueryToPostFormatConnectionPageInfoFieldPolicy,
	},
	RootQueryToRevisionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToRevisionsConnectionKeySpecifier | (() => undefined | RootQueryToRevisionsConnectionKeySpecifier),
		fields?: RootQueryToRevisionsConnectionFieldPolicy,
	},
	RootQueryToRevisionsConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToRevisionsConnectionEdgeKeySpecifier | (() => undefined | RootQueryToRevisionsConnectionEdgeKeySpecifier),
		fields?: RootQueryToRevisionsConnectionEdgeFieldPolicy,
	},
	RootQueryToRevisionsConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToRevisionsConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToRevisionsConnectionPageInfoKeySpecifier),
		fields?: RootQueryToRevisionsConnectionPageInfoFieldPolicy,
	},
	RootQueryToTagConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToTagConnectionKeySpecifier | (() => undefined | RootQueryToTagConnectionKeySpecifier),
		fields?: RootQueryToTagConnectionFieldPolicy,
	},
	RootQueryToTagConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToTagConnectionEdgeKeySpecifier | (() => undefined | RootQueryToTagConnectionEdgeKeySpecifier),
		fields?: RootQueryToTagConnectionEdgeFieldPolicy,
	},
	RootQueryToTagConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToTagConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToTagConnectionPageInfoKeySpecifier),
		fields?: RootQueryToTagConnectionPageInfoFieldPolicy,
	},
	RootQueryToTaxonomyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToTaxonomyConnectionKeySpecifier | (() => undefined | RootQueryToTaxonomyConnectionKeySpecifier),
		fields?: RootQueryToTaxonomyConnectionFieldPolicy,
	},
	RootQueryToTaxonomyConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToTaxonomyConnectionEdgeKeySpecifier | (() => undefined | RootQueryToTaxonomyConnectionEdgeKeySpecifier),
		fields?: RootQueryToTaxonomyConnectionEdgeFieldPolicy,
	},
	RootQueryToTaxonomyConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToTaxonomyConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToTaxonomyConnectionPageInfoKeySpecifier),
		fields?: RootQueryToTaxonomyConnectionPageInfoFieldPolicy,
	},
	RootQueryToTermNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToTermNodeConnectionKeySpecifier | (() => undefined | RootQueryToTermNodeConnectionKeySpecifier),
		fields?: RootQueryToTermNodeConnectionFieldPolicy,
	},
	RootQueryToTermNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToTermNodeConnectionEdgeKeySpecifier | (() => undefined | RootQueryToTermNodeConnectionEdgeKeySpecifier),
		fields?: RootQueryToTermNodeConnectionEdgeFieldPolicy,
	},
	RootQueryToTermNodeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToTermNodeConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToTermNodeConnectionPageInfoKeySpecifier),
		fields?: RootQueryToTermNodeConnectionPageInfoFieldPolicy,
	},
	RootQueryToThemeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToThemeConnectionKeySpecifier | (() => undefined | RootQueryToThemeConnectionKeySpecifier),
		fields?: RootQueryToThemeConnectionFieldPolicy,
	},
	RootQueryToThemeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToThemeConnectionEdgeKeySpecifier | (() => undefined | RootQueryToThemeConnectionEdgeKeySpecifier),
		fields?: RootQueryToThemeConnectionEdgeFieldPolicy,
	},
	RootQueryToThemeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToThemeConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToThemeConnectionPageInfoKeySpecifier),
		fields?: RootQueryToThemeConnectionPageInfoFieldPolicy,
	},
	RootQueryToUserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToUserConnectionKeySpecifier | (() => undefined | RootQueryToUserConnectionKeySpecifier),
		fields?: RootQueryToUserConnectionFieldPolicy,
	},
	RootQueryToUserConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToUserConnectionEdgeKeySpecifier | (() => undefined | RootQueryToUserConnectionEdgeKeySpecifier),
		fields?: RootQueryToUserConnectionEdgeFieldPolicy,
	},
	RootQueryToUserConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToUserConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToUserConnectionPageInfoKeySpecifier),
		fields?: RootQueryToUserConnectionPageInfoFieldPolicy,
	},
	RootQueryToUserRoleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToUserRoleConnectionKeySpecifier | (() => undefined | RootQueryToUserRoleConnectionKeySpecifier),
		fields?: RootQueryToUserRoleConnectionFieldPolicy,
	},
	RootQueryToUserRoleConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToUserRoleConnectionEdgeKeySpecifier | (() => undefined | RootQueryToUserRoleConnectionEdgeKeySpecifier),
		fields?: RootQueryToUserRoleConnectionEdgeFieldPolicy,
	},
	RootQueryToUserRoleConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RootQueryToUserRoleConnectionPageInfoKeySpecifier | (() => undefined | RootQueryToUserRoleConnectionPageInfoKeySpecifier),
		fields?: RootQueryToUserRoleConnectionPageInfoFieldPolicy,
	},
	SEOBreadcrumbs?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOBreadcrumbsKeySpecifier | (() => undefined | SEOBreadcrumbsKeySpecifier),
		fields?: SEOBreadcrumbsFieldPolicy,
	},
	SEOConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOConfigKeySpecifier | (() => undefined | SEOConfigKeySpecifier),
		fields?: SEOConfigFieldPolicy,
	},
	SEOContentType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOContentTypeKeySpecifier | (() => undefined | SEOContentTypeKeySpecifier),
		fields?: SEOContentTypeFieldPolicy,
	},
	SEOContentTypeArchive?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOContentTypeArchiveKeySpecifier | (() => undefined | SEOContentTypeArchiveKeySpecifier),
		fields?: SEOContentTypeArchiveFieldPolicy,
	},
	SEOContentTypes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOContentTypesKeySpecifier | (() => undefined | SEOContentTypesKeySpecifier),
		fields?: SEOContentTypesFieldPolicy,
	},
	SEOGlobalMeta?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOGlobalMetaKeySpecifier | (() => undefined | SEOGlobalMetaKeySpecifier),
		fields?: SEOGlobalMetaFieldPolicy,
	},
	SEOGlobalMeta404?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOGlobalMeta404KeySpecifier | (() => undefined | SEOGlobalMeta404KeySpecifier),
		fields?: SEOGlobalMeta404FieldPolicy,
	},
	SEOGlobalMetaAuthor?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOGlobalMetaAuthorKeySpecifier | (() => undefined | SEOGlobalMetaAuthorKeySpecifier),
		fields?: SEOGlobalMetaAuthorFieldPolicy,
	},
	SEOGlobalMetaConfig?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOGlobalMetaConfigKeySpecifier | (() => undefined | SEOGlobalMetaConfigKeySpecifier),
		fields?: SEOGlobalMetaConfigFieldPolicy,
	},
	SEOGlobalMetaDate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOGlobalMetaDateKeySpecifier | (() => undefined | SEOGlobalMetaDateKeySpecifier),
		fields?: SEOGlobalMetaDateFieldPolicy,
	},
	SEOGlobalMetaHome?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOGlobalMetaHomeKeySpecifier | (() => undefined | SEOGlobalMetaHomeKeySpecifier),
		fields?: SEOGlobalMetaHomeFieldPolicy,
	},
	SEOOpenGraph?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOOpenGraphKeySpecifier | (() => undefined | SEOOpenGraphKeySpecifier),
		fields?: SEOOpenGraphFieldPolicy,
	},
	SEOOpenGraphFrontPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOOpenGraphFrontPageKeySpecifier | (() => undefined | SEOOpenGraphFrontPageKeySpecifier),
		fields?: SEOOpenGraphFrontPageFieldPolicy,
	},
	SEOPageInfoSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOPageInfoSchemaKeySpecifier | (() => undefined | SEOPageInfoSchemaKeySpecifier),
		fields?: SEOPageInfoSchemaFieldPolicy,
	},
	SEOPostTypeBreadcrumbs?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOPostTypeBreadcrumbsKeySpecifier | (() => undefined | SEOPostTypeBreadcrumbsKeySpecifier),
		fields?: SEOPostTypeBreadcrumbsFieldPolicy,
	},
	SEOPostTypePageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOPostTypePageInfoKeySpecifier | (() => undefined | SEOPostTypePageInfoKeySpecifier),
		fields?: SEOPostTypePageInfoFieldPolicy,
	},
	SEOPostTypeSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOPostTypeSchemaKeySpecifier | (() => undefined | SEOPostTypeSchemaKeySpecifier),
		fields?: SEOPostTypeSchemaFieldPolicy,
	},
	SEORedirect?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEORedirectKeySpecifier | (() => undefined | SEORedirectKeySpecifier),
		fields?: SEORedirectFieldPolicy,
	},
	SEOSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOSchemaKeySpecifier | (() => undefined | SEOSchemaKeySpecifier),
		fields?: SEOSchemaFieldPolicy,
	},
	SEOSocial?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOSocialKeySpecifier | (() => undefined | SEOSocialKeySpecifier),
		fields?: SEOSocialFieldPolicy,
	},
	SEOSocialFacebook?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOSocialFacebookKeySpecifier | (() => undefined | SEOSocialFacebookKeySpecifier),
		fields?: SEOSocialFacebookFieldPolicy,
	},
	SEOSocialInstagram?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOSocialInstagramKeySpecifier | (() => undefined | SEOSocialInstagramKeySpecifier),
		fields?: SEOSocialInstagramFieldPolicy,
	},
	SEOSocialLinkedIn?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOSocialLinkedInKeySpecifier | (() => undefined | SEOSocialLinkedInKeySpecifier),
		fields?: SEOSocialLinkedInFieldPolicy,
	},
	SEOSocialMySpace?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOSocialMySpaceKeySpecifier | (() => undefined | SEOSocialMySpaceKeySpecifier),
		fields?: SEOSocialMySpaceFieldPolicy,
	},
	SEOSocialPinterest?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOSocialPinterestKeySpecifier | (() => undefined | SEOSocialPinterestKeySpecifier),
		fields?: SEOSocialPinterestFieldPolicy,
	},
	SEOSocialTwitter?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOSocialTwitterKeySpecifier | (() => undefined | SEOSocialTwitterKeySpecifier),
		fields?: SEOSocialTwitterFieldPolicy,
	},
	SEOSocialWikipedia?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOSocialWikipediaKeySpecifier | (() => undefined | SEOSocialWikipediaKeySpecifier),
		fields?: SEOSocialWikipediaFieldPolicy,
	},
	SEOSocialYoutube?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOSocialYoutubeKeySpecifier | (() => undefined | SEOSocialYoutubeKeySpecifier),
		fields?: SEOSocialYoutubeFieldPolicy,
	},
	SEOTaxonomySchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOTaxonomySchemaKeySpecifier | (() => undefined | SEOTaxonomySchemaKeySpecifier),
		fields?: SEOTaxonomySchemaFieldPolicy,
	},
	SEOUser?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOUserKeySpecifier | (() => undefined | SEOUserKeySpecifier),
		fields?: SEOUserFieldPolicy,
	},
	SEOUserSchema?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOUserSchemaKeySpecifier | (() => undefined | SEOUserSchemaKeySpecifier),
		fields?: SEOUserSchemaFieldPolicy,
	},
	SEOUserSocial?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOUserSocialKeySpecifier | (() => undefined | SEOUserSocialKeySpecifier),
		fields?: SEOUserSocialFieldPolicy,
	},
	SEOWebmaster?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SEOWebmasterKeySpecifier | (() => undefined | SEOWebmasterKeySpecifier),
		fields?: SEOWebmasterFieldPolicy,
	},
	SendPasswordResetEmailPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SendPasswordResetEmailPayloadKeySpecifier | (() => undefined | SendPasswordResetEmailPayloadKeySpecifier),
		fields?: SendPasswordResetEmailPayloadFieldPolicy,
	},
	Settings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SettingsKeySpecifier | (() => undefined | SettingsKeySpecifier),
		fields?: SettingsFieldPolicy,
	},
	Tag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagKeySpecifier | (() => undefined | TagKeySpecifier),
		fields?: TagFieldPolicy,
	},
	TagConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagConnectionKeySpecifier | (() => undefined | TagConnectionKeySpecifier),
		fields?: TagConnectionFieldPolicy,
	},
	TagConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagConnectionEdgeKeySpecifier | (() => undefined | TagConnectionEdgeKeySpecifier),
		fields?: TagConnectionEdgeFieldPolicy,
	},
	TagConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagConnectionPageInfoKeySpecifier | (() => undefined | TagConnectionPageInfoKeySpecifier),
		fields?: TagConnectionPageInfoFieldPolicy,
	},
	TagToContentNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagToContentNodeConnectionKeySpecifier | (() => undefined | TagToContentNodeConnectionKeySpecifier),
		fields?: TagToContentNodeConnectionFieldPolicy,
	},
	TagToContentNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagToContentNodeConnectionEdgeKeySpecifier | (() => undefined | TagToContentNodeConnectionEdgeKeySpecifier),
		fields?: TagToContentNodeConnectionEdgeFieldPolicy,
	},
	TagToContentNodeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagToContentNodeConnectionPageInfoKeySpecifier | (() => undefined | TagToContentNodeConnectionPageInfoKeySpecifier),
		fields?: TagToContentNodeConnectionPageInfoFieldPolicy,
	},
	TagToPostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagToPostConnectionKeySpecifier | (() => undefined | TagToPostConnectionKeySpecifier),
		fields?: TagToPostConnectionFieldPolicy,
	},
	TagToPostConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagToPostConnectionEdgeKeySpecifier | (() => undefined | TagToPostConnectionEdgeKeySpecifier),
		fields?: TagToPostConnectionEdgeFieldPolicy,
	},
	TagToPostConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagToPostConnectionPageInfoKeySpecifier | (() => undefined | TagToPostConnectionPageInfoKeySpecifier),
		fields?: TagToPostConnectionPageInfoFieldPolicy,
	},
	TagToTaxonomyConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TagToTaxonomyConnectionEdgeKeySpecifier | (() => undefined | TagToTaxonomyConnectionEdgeKeySpecifier),
		fields?: TagToTaxonomyConnectionEdgeFieldPolicy,
	},
	Taxonomy?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyKeySpecifier | (() => undefined | TaxonomyKeySpecifier),
		fields?: TaxonomyFieldPolicy,
	},
	TaxonomyConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyConnectionKeySpecifier | (() => undefined | TaxonomyConnectionKeySpecifier),
		fields?: TaxonomyConnectionFieldPolicy,
	},
	TaxonomyConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyConnectionEdgeKeySpecifier | (() => undefined | TaxonomyConnectionEdgeKeySpecifier),
		fields?: TaxonomyConnectionEdgeFieldPolicy,
	},
	TaxonomyConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyConnectionPageInfoKeySpecifier | (() => undefined | TaxonomyConnectionPageInfoKeySpecifier),
		fields?: TaxonomyConnectionPageInfoFieldPolicy,
	},
	TaxonomySEO?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomySEOKeySpecifier | (() => undefined | TaxonomySEOKeySpecifier),
		fields?: TaxonomySEOFieldPolicy,
	},
	TaxonomyToContentTypeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyToContentTypeConnectionKeySpecifier | (() => undefined | TaxonomyToContentTypeConnectionKeySpecifier),
		fields?: TaxonomyToContentTypeConnectionFieldPolicy,
	},
	TaxonomyToContentTypeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyToContentTypeConnectionEdgeKeySpecifier | (() => undefined | TaxonomyToContentTypeConnectionEdgeKeySpecifier),
		fields?: TaxonomyToContentTypeConnectionEdgeFieldPolicy,
	},
	TaxonomyToContentTypeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyToContentTypeConnectionPageInfoKeySpecifier | (() => undefined | TaxonomyToContentTypeConnectionPageInfoKeySpecifier),
		fields?: TaxonomyToContentTypeConnectionPageInfoFieldPolicy,
	},
	TaxonomyToTermNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyToTermNodeConnectionKeySpecifier | (() => undefined | TaxonomyToTermNodeConnectionKeySpecifier),
		fields?: TaxonomyToTermNodeConnectionFieldPolicy,
	},
	TaxonomyToTermNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyToTermNodeConnectionEdgeKeySpecifier | (() => undefined | TaxonomyToTermNodeConnectionEdgeKeySpecifier),
		fields?: TaxonomyToTermNodeConnectionEdgeFieldPolicy,
	},
	TaxonomyToTermNodeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TaxonomyToTermNodeConnectionPageInfoKeySpecifier | (() => undefined | TaxonomyToTermNodeConnectionPageInfoKeySpecifier),
		fields?: TaxonomyToTermNodeConnectionPageInfoFieldPolicy,
	},
	Template_ContactPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Template_ContactPageKeySpecifier | (() => undefined | Template_ContactPageKeySpecifier),
		fields?: Template_ContactPageFieldPolicy,
	},
	Template_GalleryPage?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | Template_GalleryPageKeySpecifier | (() => undefined | Template_GalleryPageKeySpecifier),
		fields?: Template_GalleryPageFieldPolicy,
	},
	TermNode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TermNodeKeySpecifier | (() => undefined | TermNodeKeySpecifier),
		fields?: TermNodeFieldPolicy,
	},
	TermNodeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TermNodeConnectionKeySpecifier | (() => undefined | TermNodeConnectionKeySpecifier),
		fields?: TermNodeConnectionFieldPolicy,
	},
	TermNodeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TermNodeConnectionEdgeKeySpecifier | (() => undefined | TermNodeConnectionEdgeKeySpecifier),
		fields?: TermNodeConnectionEdgeFieldPolicy,
	},
	TermNodeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TermNodeConnectionPageInfoKeySpecifier | (() => undefined | TermNodeConnectionPageInfoKeySpecifier),
		fields?: TermNodeConnectionPageInfoFieldPolicy,
	},
	TermNodeToEnqueuedScriptConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TermNodeToEnqueuedScriptConnectionKeySpecifier | (() => undefined | TermNodeToEnqueuedScriptConnectionKeySpecifier),
		fields?: TermNodeToEnqueuedScriptConnectionFieldPolicy,
	},
	TermNodeToEnqueuedScriptConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TermNodeToEnqueuedScriptConnectionEdgeKeySpecifier | (() => undefined | TermNodeToEnqueuedScriptConnectionEdgeKeySpecifier),
		fields?: TermNodeToEnqueuedScriptConnectionEdgeFieldPolicy,
	},
	TermNodeToEnqueuedScriptConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TermNodeToEnqueuedScriptConnectionPageInfoKeySpecifier | (() => undefined | TermNodeToEnqueuedScriptConnectionPageInfoKeySpecifier),
		fields?: TermNodeToEnqueuedScriptConnectionPageInfoFieldPolicy,
	},
	TermNodeToEnqueuedStylesheetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TermNodeToEnqueuedStylesheetConnectionKeySpecifier | (() => undefined | TermNodeToEnqueuedStylesheetConnectionKeySpecifier),
		fields?: TermNodeToEnqueuedStylesheetConnectionFieldPolicy,
	},
	TermNodeToEnqueuedStylesheetConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TermNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier | (() => undefined | TermNodeToEnqueuedStylesheetConnectionEdgeKeySpecifier),
		fields?: TermNodeToEnqueuedStylesheetConnectionEdgeFieldPolicy,
	},
	TermNodeToEnqueuedStylesheetConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TermNodeToEnqueuedStylesheetConnectionPageInfoKeySpecifier | (() => undefined | TermNodeToEnqueuedStylesheetConnectionPageInfoKeySpecifier),
		fields?: TermNodeToEnqueuedStylesheetConnectionPageInfoFieldPolicy,
	},
	Theme?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThemeKeySpecifier | (() => undefined | ThemeKeySpecifier),
		fields?: ThemeFieldPolicy,
	},
	ThemeConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThemeConnectionKeySpecifier | (() => undefined | ThemeConnectionKeySpecifier),
		fields?: ThemeConnectionFieldPolicy,
	},
	ThemeConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThemeConnectionEdgeKeySpecifier | (() => undefined | ThemeConnectionEdgeKeySpecifier),
		fields?: ThemeConnectionEdgeFieldPolicy,
	},
	ThemeConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ThemeConnectionPageInfoKeySpecifier | (() => undefined | ThemeConnectionPageInfoKeySpecifier),
		fields?: ThemeConnectionPageInfoFieldPolicy,
	},
	UniformResourceIdentifiable?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UniformResourceIdentifiableKeySpecifier | (() => undefined | UniformResourceIdentifiableKeySpecifier),
		fields?: UniformResourceIdentifiableFieldPolicy,
	},
	UpdateCategoryPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCategoryPayloadKeySpecifier | (() => undefined | UpdateCategoryPayloadKeySpecifier),
		fields?: UpdateCategoryPayloadFieldPolicy,
	},
	UpdateCommentPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateCommentPayloadKeySpecifier | (() => undefined | UpdateCommentPayloadKeySpecifier),
		fields?: UpdateCommentPayloadFieldPolicy,
	},
	UpdateMediaItemPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateMediaItemPayloadKeySpecifier | (() => undefined | UpdateMediaItemPayloadKeySpecifier),
		fields?: UpdateMediaItemPayloadFieldPolicy,
	},
	UpdatePagePayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePagePayloadKeySpecifier | (() => undefined | UpdatePagePayloadKeySpecifier),
		fields?: UpdatePagePayloadFieldPolicy,
	},
	UpdatePostFormatPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePostFormatPayloadKeySpecifier | (() => undefined | UpdatePostFormatPayloadKeySpecifier),
		fields?: UpdatePostFormatPayloadFieldPolicy,
	},
	UpdatePostPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdatePostPayloadKeySpecifier | (() => undefined | UpdatePostPayloadKeySpecifier),
		fields?: UpdatePostPayloadFieldPolicy,
	},
	UpdateSettingsPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateSettingsPayloadKeySpecifier | (() => undefined | UpdateSettingsPayloadKeySpecifier),
		fields?: UpdateSettingsPayloadFieldPolicy,
	},
	UpdateTagPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateTagPayloadKeySpecifier | (() => undefined | UpdateTagPayloadKeySpecifier),
		fields?: UpdateTagPayloadFieldPolicy,
	},
	UpdateUserPayload?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UpdateUserPayloadKeySpecifier | (() => undefined | UpdateUserPayloadKeySpecifier),
		fields?: UpdateUserPayloadFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	},
	UserConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionKeySpecifier | (() => undefined | UserConnectionKeySpecifier),
		fields?: UserConnectionFieldPolicy,
	},
	UserConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionEdgeKeySpecifier | (() => undefined | UserConnectionEdgeKeySpecifier),
		fields?: UserConnectionEdgeFieldPolicy,
	},
	UserConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserConnectionPageInfoKeySpecifier | (() => undefined | UserConnectionPageInfoKeySpecifier),
		fields?: UserConnectionPageInfoFieldPolicy,
	},
	UserRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserRoleKeySpecifier | (() => undefined | UserRoleKeySpecifier),
		fields?: UserRoleFieldPolicy,
	},
	UserRoleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserRoleConnectionKeySpecifier | (() => undefined | UserRoleConnectionKeySpecifier),
		fields?: UserRoleConnectionFieldPolicy,
	},
	UserRoleConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserRoleConnectionEdgeKeySpecifier | (() => undefined | UserRoleConnectionEdgeKeySpecifier),
		fields?: UserRoleConnectionEdgeFieldPolicy,
	},
	UserRoleConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserRoleConnectionPageInfoKeySpecifier | (() => undefined | UserRoleConnectionPageInfoKeySpecifier),
		fields?: UserRoleConnectionPageInfoFieldPolicy,
	},
	UserToCommentConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToCommentConnectionKeySpecifier | (() => undefined | UserToCommentConnectionKeySpecifier),
		fields?: UserToCommentConnectionFieldPolicy,
	},
	UserToCommentConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToCommentConnectionEdgeKeySpecifier | (() => undefined | UserToCommentConnectionEdgeKeySpecifier),
		fields?: UserToCommentConnectionEdgeFieldPolicy,
	},
	UserToCommentConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToCommentConnectionPageInfoKeySpecifier | (() => undefined | UserToCommentConnectionPageInfoKeySpecifier),
		fields?: UserToCommentConnectionPageInfoFieldPolicy,
	},
	UserToEnqueuedScriptConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToEnqueuedScriptConnectionKeySpecifier | (() => undefined | UserToEnqueuedScriptConnectionKeySpecifier),
		fields?: UserToEnqueuedScriptConnectionFieldPolicy,
	},
	UserToEnqueuedScriptConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToEnqueuedScriptConnectionEdgeKeySpecifier | (() => undefined | UserToEnqueuedScriptConnectionEdgeKeySpecifier),
		fields?: UserToEnqueuedScriptConnectionEdgeFieldPolicy,
	},
	UserToEnqueuedScriptConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToEnqueuedScriptConnectionPageInfoKeySpecifier | (() => undefined | UserToEnqueuedScriptConnectionPageInfoKeySpecifier),
		fields?: UserToEnqueuedScriptConnectionPageInfoFieldPolicy,
	},
	UserToEnqueuedStylesheetConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToEnqueuedStylesheetConnectionKeySpecifier | (() => undefined | UserToEnqueuedStylesheetConnectionKeySpecifier),
		fields?: UserToEnqueuedStylesheetConnectionFieldPolicy,
	},
	UserToEnqueuedStylesheetConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToEnqueuedStylesheetConnectionEdgeKeySpecifier | (() => undefined | UserToEnqueuedStylesheetConnectionEdgeKeySpecifier),
		fields?: UserToEnqueuedStylesheetConnectionEdgeFieldPolicy,
	},
	UserToEnqueuedStylesheetConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToEnqueuedStylesheetConnectionPageInfoKeySpecifier | (() => undefined | UserToEnqueuedStylesheetConnectionPageInfoKeySpecifier),
		fields?: UserToEnqueuedStylesheetConnectionPageInfoFieldPolicy,
	},
	UserToMediaItemConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToMediaItemConnectionKeySpecifier | (() => undefined | UserToMediaItemConnectionKeySpecifier),
		fields?: UserToMediaItemConnectionFieldPolicy,
	},
	UserToMediaItemConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToMediaItemConnectionEdgeKeySpecifier | (() => undefined | UserToMediaItemConnectionEdgeKeySpecifier),
		fields?: UserToMediaItemConnectionEdgeFieldPolicy,
	},
	UserToMediaItemConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToMediaItemConnectionPageInfoKeySpecifier | (() => undefined | UserToMediaItemConnectionPageInfoKeySpecifier),
		fields?: UserToMediaItemConnectionPageInfoFieldPolicy,
	},
	UserToPageConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToPageConnectionKeySpecifier | (() => undefined | UserToPageConnectionKeySpecifier),
		fields?: UserToPageConnectionFieldPolicy,
	},
	UserToPageConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToPageConnectionEdgeKeySpecifier | (() => undefined | UserToPageConnectionEdgeKeySpecifier),
		fields?: UserToPageConnectionEdgeFieldPolicy,
	},
	UserToPageConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToPageConnectionPageInfoKeySpecifier | (() => undefined | UserToPageConnectionPageInfoKeySpecifier),
		fields?: UserToPageConnectionPageInfoFieldPolicy,
	},
	UserToPostConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToPostConnectionKeySpecifier | (() => undefined | UserToPostConnectionKeySpecifier),
		fields?: UserToPostConnectionFieldPolicy,
	},
	UserToPostConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToPostConnectionEdgeKeySpecifier | (() => undefined | UserToPostConnectionEdgeKeySpecifier),
		fields?: UserToPostConnectionEdgeFieldPolicy,
	},
	UserToPostConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToPostConnectionPageInfoKeySpecifier | (() => undefined | UserToPostConnectionPageInfoKeySpecifier),
		fields?: UserToPostConnectionPageInfoFieldPolicy,
	},
	UserToRevisionsConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToRevisionsConnectionKeySpecifier | (() => undefined | UserToRevisionsConnectionKeySpecifier),
		fields?: UserToRevisionsConnectionFieldPolicy,
	},
	UserToRevisionsConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToRevisionsConnectionEdgeKeySpecifier | (() => undefined | UserToRevisionsConnectionEdgeKeySpecifier),
		fields?: UserToRevisionsConnectionEdgeFieldPolicy,
	},
	UserToRevisionsConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToRevisionsConnectionPageInfoKeySpecifier | (() => undefined | UserToRevisionsConnectionPageInfoKeySpecifier),
		fields?: UserToRevisionsConnectionPageInfoFieldPolicy,
	},
	UserToUserRoleConnection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToUserRoleConnectionKeySpecifier | (() => undefined | UserToUserRoleConnectionKeySpecifier),
		fields?: UserToUserRoleConnectionFieldPolicy,
	},
	UserToUserRoleConnectionEdge?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToUserRoleConnectionEdgeKeySpecifier | (() => undefined | UserToUserRoleConnectionEdgeKeySpecifier),
		fields?: UserToUserRoleConnectionEdgeFieldPolicy,
	},
	UserToUserRoleConnectionPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserToUserRoleConnectionPageInfoKeySpecifier | (() => undefined | UserToUserRoleConnectionPageInfoKeySpecifier),
		fields?: UserToUserRoleConnectionPageInfoFieldPolicy,
	},
	WPPageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WPPageInfoKeySpecifier | (() => undefined | WPPageInfoKeySpecifier),
		fields?: WPPageInfoFieldPolicy,
	},
	WritingSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WritingSettingsKeySpecifier | (() => undefined | WritingSettingsKeySpecifier),
		fields?: WritingSettingsFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;