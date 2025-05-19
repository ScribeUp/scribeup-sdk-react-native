#import "RNScribeupSDK.h"
#import <ScribeUpSDK/ScribeUpSDK.h>

@implementation RNScribeupSDK

RCT_EXPORT_MODULE()

- (NSArray<NSString *> *)supportedEvents {
    return @[@"onExit"];
}

RCT_EXPORT_METHOD(present:(NSDictionary *)options
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        NSString *url = options[@"url"];
        NSString *productName = options[@"productName"] ?: @"Subscription Manager";
        
        if (!url) {
            reject(@"E_INVALID_URL", @"URL is required", nil);
            return;
        }
        
        UIViewController *rootViewController = [UIApplication sharedApplication].keyWindow.rootViewController;
        if (!rootViewController) {
            reject(@"E_NO_ROOT_VC", @"No root view controller found", nil);
            return;
        }
        
        SubscriptionManagerViewController *vc = [[SubscriptionManagerViewController alloc] 
            initWithUrl:url 
            productName:productName 
            delegate:self];
            
        [rootViewController presentViewController:vc animated:YES completion:nil];
    });
}

#pragma mark - SubscriptionManagerDelegate

- (void)onExit:(SubscriptionManagerError *)error {
    if (error) {
        [self sendEventWithName:@"onExit" body:@{
            @"error": @{
                @"code": @(error.code),
                @"message": error.message ?: @""
            }
        }];
    } else {
        [self sendEventWithName:@"onExit" body:nil];
    }
}

@end 